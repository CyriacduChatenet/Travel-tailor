import { PartialType } from '@nestjs/mapped-types';
import { CreateActivtyDto } from './create-activty.dto';

export class UpdateActivtyDto extends PartialType(CreateActivtyDto) {}
