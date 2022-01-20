import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {

    // args[0] : unité de mesure désirée
    // args[1] : unité de mesure de l'utilisateur (base)

    // console.log(args);

    //if (args[0] == undefined || args[1] == undefined) return "" 
    
    // c : c => value C°
    // f : f => value F°
    //pour avoir la valeur dans la balise 'Avant'
    if (args[0] == args[1]) {
      return value + ' ' + args[0].toUpperCase() + '°'
    }
      //calc F°
    if (args[1] == 'f') {
      return (value * (9/5) + 32) + ' ' + args[1].toUpperCase() + '°'
    }
    
      // calc C°
    if (args[1] == 'c') {
      return ((value - 32) * (5/9)) + ' ' + args[1].toUpperCase() + '°'
    }
    
    return ""
  }

}
