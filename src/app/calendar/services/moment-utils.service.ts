import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MomentUtilsService {

  constructor() { }

  public isToday(date: string): boolean {
    return moment(date).isSame(moment(), 'day');
  }

  public isWeekend(date: string): boolean {
    const day: number = moment(date).isoWeekday();
    return day === 6 || day === 7;
  }

  public inRange(from, to): boolean {
    var fromRange = moment().isSame(from, 'day') || moment().isAfter(from, 'day');
    var toRange = moment().isSame(to, 'day') || moment().isBefore(to, 'day');
    return fromRange && toRange;
  }
}
