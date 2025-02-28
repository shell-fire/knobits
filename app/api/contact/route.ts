import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import fs from 'fs/promises';

const execPromise = promisify(exec);

// Create a log function to help with debugging
async function logToFile(message: string, type: 'info' | 'error' = 'info') {
  const logDir = '/tmp';
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  try {
    await fs.appendFile(`${logDir}/mailform_${type}.log`, logMessage);
  } catch (err) {
    console.error('Failed to write to log file:', err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message, phone } = body;

    await logToFile(`Received form submission from: ${name} <${email}>`);

    // Validate the required fields
    if (!name || !email || !message) {
      await logToFile(`Validation failed - missing required fields`, 'error');
      return NextResponse.json(
        { message: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Format the email content
    const subject = `Contact Form Submission from ${name}`;
    const companyInfo = company ? `Company: ${company}\n` : '';
    const phoneInfo = phone ? `Phone: ${phone}\n` : '';

    // Creating a proper email with headers
    const emailContent = `To: info@shellfire.de
From: ${name} <blogserver@shellfire.de>
Reply-To: ${email}
Subject: ${subject}

Name: ${name}
Email: ${email}
${companyInfo}${phoneInfo}
Message:
${message}
`;

    // Create a safe email content for sendmail (escaping quotes and special characters)
    const safeEmailContent = emailContent.replace(/"/g, '\\"').replace(/`/g, '\\`');

    // Log the command we're about to execute
    const sendmailCommand = `/usr/sbin/sendmail -t`;
    await logToFile(`Executing sendmail with command: ${sendmailCommand}`);
    await logToFile(`Email content: ${safeEmailContent.substring(0, 500)}...`);

    // Use a more reliable approach: pipe the content directly to sendmail
    const { stdout, stderr } = await execPromise(`echo "${safeEmailContent}" | ${sendmailCommand}`);

    if (stdout) await logToFile(`Sendmail stdout: ${stdout}`);
    if (stderr) await logToFile(`Sendmail stderr: ${stderr}`, 'error');

    await logToFile('Email sent successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    await logToFile(`Error sending email: ${error instanceof Error ? error.message : String(error)}`, 'error');
    await logToFile(`Error stack: ${error instanceof Error ? error.stack : 'No stack trace'}`, 'error');

    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}