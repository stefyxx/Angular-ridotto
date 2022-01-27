import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSecondsToDHMS'
})
export class ConvertSecondsToDHMSPipe implements PipeTransform {

  transform(value: number): string {
    let days : number = Math.floor(value / 86400)
    let hours : number = Math.floor(value % 86400 / 3600)
    let minutes : number = Math.floor(value % 86400 % 3600 / 60)
    let seconds : number = Math.floor(value % 86400 % 3600 % 60)

    return `${days} ${ days > 1 ? 'jours' : 'jour' } ${hours} ${ hours > 1 ? 'heures' : 'heure' } ${minutes} ${ minutes > 1 ? 'minutes' : 'minute' } et ${seconds} ${ seconds > 1 ? 'secondes' : 'seconde' } `;
  }

}
