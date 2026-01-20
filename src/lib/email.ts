import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Create transporter only if credentials are available
// This prevents build errors when env vars are not set
const createTransporter = () => {
  if (!emailUser || !emailPass) {
    console.warn(
      "EMAIL_USER and EMAIL_PASS not defined. Email functionality will be disabled.",
    );
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

export const transporter = createTransporter();

export const mailOptions = {
  from: emailUser || "noreply@hknexusglobal.com",
};
