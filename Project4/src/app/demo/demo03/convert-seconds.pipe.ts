import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSeconds'
})
export class ConvertSecondsPipe implements PipeTransform {

  transform(value: number): string {
    let days :number =Math.floor(value/86400)
    let hours :number =Math.floor(value%86400/3600)
    let minutes :number =Math.floor(value%86400%3600/60)
    let seconds :number =Math.floor(value%86400%3600%60)
    
    return`${days} ${days>1?'goirni':'goirno'} ${hours} ${hours>1?'ore':'ora'} ${minutes} ${minutes>1?'minuti':'minuto'} ${seconds} ${seconds>1?'secondi':'secondo'}`;
  }

}
