import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    // console.log(args);
    
    return Math.pow(value, args[0]);
  }

}
