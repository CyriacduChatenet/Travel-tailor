import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AdvertiserService } from './advertiser.service';
import { CreateAdvertiserDto } from './dto/create-advertiser.dto';
import { UpdateAdvertiserDto } from './dto/update-advertiser.dto';

@Controller('advertiser')
export class AdvertiserController {
  constructor(private readonly advertiserService: AdvertiserService) {}

  @Post()
  create(@Body() createAdvertiserDto: CreateAdvertiserDto) {
    return this.advertiserService.create(createAdvertiserDto);
  }

  @Get()
  findAll() {
    return this.advertiserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertiserService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdvertiserDto: UpdateAdvertiserDto,
  ) {
    return this.advertiserService.update(id, updateAdvertiserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertiserService.remove(id);
  }
}
