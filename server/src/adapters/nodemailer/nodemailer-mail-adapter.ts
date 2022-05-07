import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7818b6c7d46a2e",
        pass: "e729c4d5170b40"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
          await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Erick Santos <zxjonathanxz22@gmail.com>',
         subject,
         html:body,

    });
    };
}