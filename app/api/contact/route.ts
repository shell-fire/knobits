
import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

// Validation function
function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.name.trim()) {
      return NextResponse.json({ message: "Name is required" }, { status: 400 });
    }
    
    if (!data.email || !validateEmail(data.email)) {
      return NextResponse.json({ message: "Valid email is required" }, { status: 400 });
    }
    
    if (!data.message || !data.message.trim()) {
      return NextResponse.json({ message: "Message is required" }, { status: 400 });
    }
    
    // Format email content
    const subject = `Knobits AI Demo Request from ${data.name}`;
    const recipient = "info@shellfire.de";
    
    let body = `Name: ${data.name}\n`;
    body += `Email: ${data.email}\n`;
    
    if (data.company) {
      body += `Company: ${data.company}\n`;
    }
    
    if (data.phone) {
      body += `Phone: ${data.phone}\n`;
    }
    
    body += `\nMessage:\n${data.message}\n`;
    
    // Escape special characters for shell command
    const escapedSubject = subject.replace(/"/g, '\\"');
    const escapedBody = body.replace(/"/g, '\\"').replace(/`/g, '\\`');
    
    // Use sendmail to send the email
    const mailCommand = `echo "${escapedBody}" | sendmail -t -F "Knobits AI Website" -f "${data.email}" -s "${escapedSubject}" ${recipient}`;
    
    await execPromise(mailCommand);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
