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

  public inRange(from: string, to: string, date: string): boolean {
    if (moment(date).isValid()) {
      const fromRange: boolean = moment(date).isSame(from, 'day') || moment(date).isAfter(from, 'day');
      const toRange: boolean = moment(date).isSame(to, 'day') || moment(date).isBefore(to, 'day');
      return fromRange && toRange;
    }
    return false;
  }
}
