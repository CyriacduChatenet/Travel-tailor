import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

import { MailService } from './mail.service';
import { ResetTokenPassword } from './entities/mail.entity';
import { MailController } from './mail.controller';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forFeature([ResetTokenPassword]),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: Number(process.env.MAILER_PORT),
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.MAILER_EMAIL,
          pass: process.env.MAILER_PASSWORD,
        },
      },
    }),
    JwtModule.register({
      secret: process.env.MAILER_SECRET,
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
