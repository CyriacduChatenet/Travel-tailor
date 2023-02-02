import { Injectable } from '@nestjs/common';
import { CreateTravelerDto } from './dto/create-traveler.dto';
import { UpdateTravelerDto } from './dto/update-traveler.dto';

@Injectable()
export class TravelerService {
  create(createTravelerDto: CreateTravelerDto) {
    return 'This action adds a new traveler';
  }

  findAll() {
    return `This action returns all traveler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} traveler`;
  }

  update(id: number, updateTravelerDto: UpdateTravelerDto) {
    return `This action updates a #${id} traveler`;
  }

  remove(id: number) {
    return `This action removes a #${id} traveler`;
  }
}
