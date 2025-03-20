const nodemailer = require('nodemailer');
const { NODEMAILER_USER, NODEMAILER_PASS } = require('../config/config');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: { user: NODEMAILER_USER, pass: NODEMAILER_PASS },
});

const sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    from: NODEMAILER_USER,
    to,
    subject,
    html,
  });
};

module.exports = { sendEmail };