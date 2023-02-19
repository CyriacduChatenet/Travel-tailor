import { PartialType } from '@nestjs/mapped-types';
import { CreateResetPasswordTokenDto } from './create-reset-password-token.dto';

export class UpdateResetPasswordTokenDto extends PartialType(
  CreateResetPasswordTokenDto,
) {
  token: string;
}
