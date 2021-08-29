import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'cellDate'
})
export class CellDatePipe implements PipeTransform {

  transform(value: string): string | null {
    const isValidDate: boolean = moment(value).isValid();
    if (isValidDate) {
      return `<div> ${moment(value).format('ddd')} </div> <div> ${moment(value).format('DD/MM')} </div>`;
    }
    return null;
  }

}
