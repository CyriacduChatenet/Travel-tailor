import { Injectable } from '@nestjs/common';
import { CreateActivtyDto } from './dto/create-activty.dto';
import { UpdateActivtyDto } from './dto/update-activty.dto';

@Injectable()
export class ActivtyService {
  create(createActivtyDto: CreateActivtyDto) {
    return 'This action adds a new activty';
  }

  findAll() {
    return `This action returns all activty`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activty`;
  }

  update(id: number, updateActivtyDto: UpdateActivtyDto) {
    return `This action updates a #${id} activty`;
  }

  remove(id: number) {
    return `This action removes a #${id} activty`;
  }
}
