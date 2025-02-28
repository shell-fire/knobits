import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message, phone } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required fields." },
        { status: 400 },
      );
    }

    // Format the email content
    const subject = `Contact Form Submission from ${name}`;
    const companyInfo = company ? `Company: ${company}\n` : "";
    const phoneInfo = phone ? `Phone: ${phone}\n` : "";
    const emailContent = `
From: ${name} <${email}>
${companyInfo}${phoneInfo}
Message:
${message}
    `;

    // Create a safe email content for sendmail (escaping quotes and special characters)
    const safeEmailContent = emailContent.replace(/"/g, '\\"');

    // Prepare the sendmail command
    const sendmailCommand = `echo "${safeEmailContent}" | sendmail -t -f"blogserver@shellfire.de" info@shellfire.de -s "${subject}"`;

    // Execute the sendmail command
    await execPromise(sendmailCommand);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
