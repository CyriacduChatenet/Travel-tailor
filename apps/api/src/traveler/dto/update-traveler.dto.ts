import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelerDto } from './create-traveler.dto';

export class UpdateTravelerDto extends PartialType(CreateTravelerDto) {}
