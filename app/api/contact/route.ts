
import { NextResponse } from "next/server";
import fs from 'fs/promises';
import nodemailer from 'nodemailer';

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

    // Create a transporter using the sendmail transport
    const transporter = nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail'
    });

    // Format the email content
    const subject = `Contact Form Submission from ${name}`;
    const companyInfo = company ? `Company: ${company}\n` : '';
    const phoneInfo = phone ? `Phone: ${phone}\n` : '';
    
    // Prepare email data
    const mailOptions = {
      from: `"${name}" <blogserver@shellfire.de>`,
      to: 'info@shellfire.de',
      replyTo: email,
      subject: subject,
      text: `
Name: ${name}
Email: ${email}
${companyInfo}${phoneInfo}
Message:
${message}
      `
    };

    await logToFile(`Sending email with options: ${JSON.stringify(mailOptions, null, 2)}`);

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    await logToFile(`Email sent successfully. MessageId: ${info.messageId || 'unknown'}`);
    return NextResponse.json({ 
      success: true,
      message: {
        de: "Vielen Dank für Ihre Nachricht! Wir werden uns umgehend bei Ihnen melden.",
        en: "Thank you for your message! We will get back to you as soon as possible."
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    await logToFile(`Error sending email: ${error instanceof Error ? error.message : String(error)}`, 'error');
    await logToFile(`Error stack: ${error instanceof Error ? error.stack : 'No stack trace'}`, 'error');

    return NextResponse.json(
      { 
        message: {
          de: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es später noch einmal.",
          en: "Failed to send email. Please try again later."
        }
      },
      { status: 500 }
    );
  }
}
