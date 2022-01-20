import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number, addSymbol : boolean = true, atLeft: boolean = false): string {
    let result : number = (value *(9/5)) +32;
    let show = result.toString();
    if (addSymbol) {
      if(atLeft) {
        return `F ${show}°` 
      }
      else return `${show}°F`
    }
    return show
  }

}
