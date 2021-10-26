import { Module } from '@nestjs/common';
import { CalculateController } from './calculate.controller';
import { CalculateService } from './calculate.service';

@Module({
  controllers: [CalculateController],
  imports: [CalculateModule],
  providers: [CalculateService],
})
export class CalculateModule {}
