import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})

export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string): string {
    const number = Number(value);

    if (isNaN(number)) {
      return value;
    }

    const result = number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return result;
  }
}
