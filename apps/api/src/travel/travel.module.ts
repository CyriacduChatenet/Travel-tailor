import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';

@Module({
  controllers: [TravelController],
  providers: [TravelService]
})
export class TravelModule {}
