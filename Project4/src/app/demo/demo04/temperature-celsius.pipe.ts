import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureCelsius'
})
export class TemperatureCelsiusPipe implements PipeTransform {

  transform(value: number): string {
    value = (value -32)*5/9
    return `${value} C°`;
  }

}
