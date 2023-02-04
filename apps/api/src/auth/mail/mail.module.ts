import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ResetTokenPassword } from './entity/mail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResetTokenPassword])],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
