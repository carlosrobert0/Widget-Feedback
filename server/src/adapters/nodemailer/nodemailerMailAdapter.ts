import nodemailer from 'nodemailer'
import { MailAdapater, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f3156c846baf8",
    pass: "8fd2f71e536274"
  }
});

export class NodemailerMailAdapter implements MailAdapater {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Crsoft <carlostutoriais@gmail.com>',
      to: 'Cr Soft <carlosroberto15755@gmail.com>',
      subject,
      html: body
    })
  }
}