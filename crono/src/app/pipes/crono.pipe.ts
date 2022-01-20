import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crono'
})
export class CronoPipe implements PipeTransform {

  transform(value: number): string {
    return Math.floor(value/60)+" minuti "+ ((value%60<10)?'0'+(value%60):value%60)+ " secondi";
  }

}
