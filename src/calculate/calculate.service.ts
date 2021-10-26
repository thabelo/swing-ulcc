import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  calculator1(loveExpression: string) {
    return this.getlovePercent(
      this.getCharacterCount(loveExpression.toLowerCase()),
    );
  }

  getlovePercent(numberString: string) {
    let newString = '';
    while (numberString.length > 0) {
      if (numberString.length > 1) {
        const lNumber = numberString.substring(0, 1);
        const rNumber = numberString.substring(
          numberString.length - 1,
          numberString.length,
        );
        newString += (parseInt(lNumber) + parseInt(rNumber)).toString();
      } else {
        newString += numberString[0];
        break;
      }
      numberString = numberString.substring(1, numberString.length - 1);
    }
    if (newString.length > 2) return this.getlovePercent(newString);
    return parseInt(newString) > 100 ? 100 : parseInt(newString);
  }

  getCharacterCount(loveExpression: string) {
    // Set string holder
    let counterString = '';

    // Remove spaces
    loveExpression = loveExpression.split(' ').join('');
    while (loveExpression.length > 0) {
      const nextChar = loveExpression[0];
      const count = loveExpression.split(nextChar).length - 1;
      loveExpression = loveExpression.split(nextChar).join('');
      counterString += count;
    }
    return counterString;
  }

  // Simulate Bijection calculator
  calculator2() {
    return Math.floor(Math.random() * 200);
  }

  // Simulate Bijection calculator
  calculator3() {
    return Math.floor(Math.random() * 6);
  }

  aggregate(
    calculator1Value: number,
    calculator2Value: number,
    calculator3Value: number,
  ) {
    const calculator1Weight = 0.2;
    const calculator2Weight = 0.5;
    const calculator3Weight = 0.3;
    return (
      (calculator1Value / 100) * calculator1Weight +
      (calculator2Value / 200) * calculator2Weight +
      (calculator3Value / 6) * calculator3Weight
    );
  }
}
