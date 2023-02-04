import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  forgotPassword(createMailDto: CreateMailDto) {
    this.mailerService
      .sendMail({
        to: createMailDto.email, // list of receivers
        from: 'noreply@nestjs.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then(() => {
        console.log('sucess');
      })
      .catch(() => {
        console.log('error');
      });
  }
}
