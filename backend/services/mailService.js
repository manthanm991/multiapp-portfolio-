const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.MAIL_USERNAME, pass: process.env.MAIL_PASSWORD }
});

const sendResetPasswordEmail = async (to, name, resetURL) => {
  try {
    const templatePath = path.join(__dirname, '../templates/resetPassword.ejs');
    const html = await ejs.renderFile(templatePath, { user: { name }, resetURL });

    await transporter.sendMail({
      from: `"Manthan Makode Portfolio" <${process.env.MAIL_USERNAME}>`,
      to,
      subject: 'Password Reset Request',
      html
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

const sendContactToOwner = async (data) => {
  try {
    const templatePath = path.join(__dirname, '../templates/ownerContactForm.ejs');
    const html = await ejs.renderFile(templatePath, { data });

    await transporter.sendMail({
      from: `"Manthan Makode Portfolio" <${process.env.MAIL_USERNAME}>`,
      to: process.env.MAIL_USERNAME,
      subject: 'New Contact Form Message',
      html
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

const sendContactToUser = async (data) => {
  try {
    if (!data.email) { return { success: false, error: "Missing recipient email address" }; }

    const templatePath = path.join(__dirname, '../templates/userContactForm.ejs');
    const html = await ejs.renderFile(templatePath, { data });

    await transporter.sendMail({
      from: `"Manthan Makode Portfolio" <${process.env.MAIL_USERNAME}>`,
      to: data.email,
      subject: 'We Received Your Message',
      html
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

module.exports = { sendContactToOwner, sendContactToUser, sendResetPasswordEmail };