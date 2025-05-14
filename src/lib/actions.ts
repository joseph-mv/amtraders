"use server";
import nodemailer from "nodemailer";

export async function handleContactForm(prevState:{ success: boolean, error: null | string }, formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const inquiryType = formData.get("inquiryType") as string;
  const message = formData.get("message") as string;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // tls: {
      //   rejectUnauthorized: false, // ⚠️ Accept self-signed certs (fixes ESOCKET)
      // },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'Amtradingchina@yahoo.com', // or another recipient
      subject: `New Inquiry: ${inquiryType}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, error: null };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: 'Failed to send message' };
  }
}
