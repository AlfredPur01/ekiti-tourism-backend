const resetPasswordTemplate = (resetUrl) => `
  <h2>Reset Your Password</h2>
  <p>Click the link below to reset your password:</p>
  <a href="${resetUrl}">${resetUrl}</a>
  <p>This link expires in 1 hour.</p>
`;

module.exports = { resetPasswordTemplate };