import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelerService } from './traveler.service';
import { TravelerController } from './traveler.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TravelerModule])],
  controllers: [TravelerController],
  providers: [TravelerService],
})
export class TravelerModule {}
