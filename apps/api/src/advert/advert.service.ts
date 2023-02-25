import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { Advert } from './entities/advert.entity';

@Injectable()
export class AdvertService {
  constructor(
    @InjectRepository(Advert) private advertRepository: Repository<Advert>,
  ) {}
  create(createAdvertDto: CreateAdvertDto) {
    return this.advertRepository.save(createAdvertDto);
  }

  async findAll() {
    return await this.advertRepository.find({
      relations: {
        advertiser: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.advertRepository.findOneBy({ id });
  }

  async update(id: string, updateAdvertDto: UpdateAdvertDto) {
    return await this.advertRepository.update(id, updateAdvertDto);
  }

  async remove(id: string) {
    return await this.advertRepository.softDelete({ id });
  }
}
