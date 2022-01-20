import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureFarenheit'
})
export class TemperatureFarenheitPipe implements PipeTransform {

  transform(value: number): string {
    value = (value * 1.8) + 32
    return `${value} F°`;
  }

}
