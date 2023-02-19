import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResetPasswordTokenService } from './reset-password-token.service';
import { CreateResetPasswordTokenDto } from './dto/create-reset-password-token.dto';
import { UpdateResetPasswordTokenDto } from './dto/update-reset-password-token.dto';

@Controller('reset-password-token')
export class ResetPasswordTokenController {
  constructor(
    private readonly resetPasswordTokenService: ResetPasswordTokenService,
  ) {}

  @Post()
  create(@Body() createResetPasswordTokenDto: CreateResetPasswordTokenDto) {
    return this.resetPasswordTokenService.create(createResetPasswordTokenDto);
  }

  @Get()
  findAll() {
    return this.resetPasswordTokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resetPasswordTokenService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResetPasswordTokenDto: UpdateResetPasswordTokenDto,
  ) {
    return this.resetPasswordTokenService.update(
      id,
      updateResetPasswordTokenDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resetPasswordTokenService.remove(id);
  }
}
