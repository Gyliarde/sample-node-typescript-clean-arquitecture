import { IMailService, IMessage } from "../../core/ports/services/IMailService";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapServiceImpl implements IMailService {
    private transporter : Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host : 'smtp.mailtrap.io',
            port : 2525,
            auth : {
                user : '6546541564',
                pass: '1321231331'
            }

        })
    }
    
    async sendEmail(message: IMessage): Promise<void> {
        console.log('Email enviado com sucesso')
        // await this.transporter.sendMail({
        //     to: {
        //         name: message.to.name,
        //         address: message.to.email
        //     },
        //     from: {
        //         name: message.to.name,
        //         address: message.to.email
        //     },
        //     subject : message.subject,
        //     html: message.body
        // })
    }

}