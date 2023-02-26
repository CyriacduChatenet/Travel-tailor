import { Module } from '@nestjs/common';
import { ActivtyService } from './activty.service';
import { ActivtyController } from './activty.controller';

@Module({
  controllers: [ActivtyController],
  providers: [ActivtyService]
})
export class ActivtyModule {}
