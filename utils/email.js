const nodemailer = require('nodemailer');
const path = require('path');
const pug = require('pug');
const { compile } = require('html-to-text');

const convertOptions = {
  wordwrap: false,
};
const compiledConvert = compile(convertOptions);
class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = process.env.EMAIL_FROM;
  }

  newTransport() {
    if (process.env.NOE_ENV === 'production') {
      // use sendgrid
      return;
    }
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOSTNAME,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    return transporter;
  }

  async send(template, subject) {
    const html = pug.renderFile(
      path.join(process.cwd(), `views/emails/${template}.pug`),
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      }
    );

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html,
      text: compiledConvert(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to natours');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token expires in 10 minutes '
    );
  }
}

module.exports = Email;
