import { Module } from '@nestjs/common';
import { CalculateService } from './calculate/calculate.service';
import { CalculateModule } from './calculate/calculate.module';
import { CalculateController } from './calculate/calculate.controller';

@Module({
  imports: [CalculateModule],
  controllers: [CalculateController],
  providers: [CalculateService],
})
export class AppModule {}
