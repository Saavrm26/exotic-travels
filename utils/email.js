const nodemailer = require('nodemailer');
const path = require('path');
const pug = require('pug');
const SibApiV3Sdk = require('sib-api-v3-sdk');
const { compile } = require('html-to-text');

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey =
  process.env.BREVO_API_KEY;
const convertOptions = {
  wordwrap: false,
};
const compiledConvert = compile(convertOptions);

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `${process.env.SENDER_NAME} ${process.env.SENDER_EMAIL}`;
  }

  newTransport() {
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
      subject,
      html,
      text: compiledConvert(html),
    };

    if (process.env.NODE_ENV === 'development')
      await this.newTransport().sendMail(mailOptions);
    else {
      try {
        await new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
          subject,
          sender: {
            email: process.env.SENDER_EMAIL,
            name: process.env.SENDER_NAME,
          },
          to: [{ name: this.firstName, email: this.to }],
          htmlContent: html,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to natours');
  }

  async sendPaymentSuccess() {
    await this.send('paymentSuccess', 'Payment Successful');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token expires in 10 minutes '
    );
  }
}

module.exports = Email;
