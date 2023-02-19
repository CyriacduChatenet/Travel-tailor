import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  private generateRandomId(length: number): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  public async sendForgotPasswordMail(reciever: string, resetLink: string) {
    await this.mailerService.sendMail({
      to: reciever,
      from: 'noreply@nestjs.com',
      subject: 'Testing Nest MailerModule ✔',
      text: 'welcome',
      html: `<div>
      <p>You have send demand to reset your password</p>
      <a href="${resetLink}/${this.generateRandomId(100)}">Reset your password here</a>
      </div>`,
    });
  }
}
