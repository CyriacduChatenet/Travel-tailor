import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Repository } from 'typeorm';

import { CreateMailDto } from './dto/create-mail.dto';
import { ResetTokenPassword } from './entities/mail.entity';

dotenv.config();

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(ResetTokenPassword)
    private resetTokenPasswordRepository: Repository<ResetTokenPassword>,
    private readonly mailerService: MailerService,
    private jwtService: JwtService,
  ) {}
  public forgotPasswordMail(createMailDto: CreateMailDto) {
    this.mailerService.sendMail({
      to: createMailDto.email,
      from: process.env.MAILER_MAIL_SENDER,
      subject: 'Forgot password',
      text: 'Reset password demand',
      html: `<h1>Reset password demand on ${createMailDto.email}</h1>`,
    });
    const token = this.jwtService.sign(createMailDto);
    this.resetTokenPasswordRepository.save({ token });
    return {
      reset_token: token,
    };
  }

  public resetPasswordMail(createMailDto: CreateMailDto) {
    this.mailerService.sendMail({
      to: createMailDto.email,
      from: process.env.MAILER_MAIL_SENDER,
      subject: 'Reset password',
      text: 'Reset password',
      html: `<div>
        <h1>Reset password successfully on ${createMailDto.email}</h1>
        <a href="">resetPassword</a>
        </div>`,
    });
  }
}
