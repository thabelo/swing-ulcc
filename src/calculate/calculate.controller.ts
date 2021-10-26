import { Body, Controller, Post } from '@nestjs/common';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Post()
  calculate(@Body() params: any): any {
    const data = [];
    // Calculator 1
    const calculator1Data = this.calculateService.calculator1(params.string);
    data.push(
      'Calculator 1 returned a score of ' +
        calculator1Data +
        ' out of a maximum of 100',
    );

    //  Calculator 2
    const calculator2Data = this.calculateService.calculator2();
    data.push(
      'Calculator 2 returned a score of ' +
        calculator2Data +
        ' out of a maximum score of 200',
    );

    //  Calculator 3
    const calculator3Data = this.calculateService.calculator3();
    data.push(
      'Calculator 3 returned a score of ' +
        calculator3Data +
        ' out of a maximum of 6',
    );

    data.push(
      'Aggregate : ' +
        this.calculateService
          .aggregate(calculator1Data, calculator2Data, calculator3Data)
          .toFixed(3),
    );
    return data;
  }
}
