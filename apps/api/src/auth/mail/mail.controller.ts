import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('auth/')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('forgot-password')
  forgotPassword(@Body() createMailDto: CreateMailDto) {
    return this.mailService.forgotPassword(createMailDto);
  }
}
