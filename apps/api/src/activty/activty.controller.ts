import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivtyService } from './activty.service';
import { CreateActivtyDto } from './dto/create-activty.dto';
import { UpdateActivtyDto } from './dto/update-activty.dto';

@Controller('activty')
export class ActivtyController {
  constructor(private readonly activtyService: ActivtyService) {}

  @Post()
  create(@Body() createActivtyDto: CreateActivtyDto) {
    return this.activtyService.create(createActivtyDto);
  }

  @Get()
  findAll() {
    return this.activtyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activtyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivtyDto: UpdateActivtyDto) {
    return this.activtyService.update(+id, updateActivtyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activtyService.remove(+id);
  }
}
