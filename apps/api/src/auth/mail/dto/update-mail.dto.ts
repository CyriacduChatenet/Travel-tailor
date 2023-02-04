import { PartialType } from '@nestjs/mapped-types';
import { CreateMailDto } from './create-mail.dto';

export class UpdateMailDto extends PartialType(CreateMailDto) {}
