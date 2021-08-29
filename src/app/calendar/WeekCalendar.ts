import * as moment from 'moment';
import * as _ from 'underscore';
import { Week } from './Week';

export class WeekCalendar {
    private weeks: Array<Week> = [];
    private calendarSize: number = 51;

    constructor() {
        this.updateCalendar();
    }

    private updateCalendar(date?): void {
        const newWeeks: Array<Week> = [];
        const firstDayOfMonth: moment.Moment = moment().startOf('week');
        let startWeek;
        if (!date) {
            startWeek = new Week({
                day: firstDayOfMonth
            }).prev();
        } else {
            startWeek = new Week({
                day: moment(date)
            }).prev();
        }
        while (newWeeks.length !== this.calendarSize) {
            startWeek = startWeek.next();
            newWeeks.push(startWeek);
        }
        this.weeks = newWeeks;
    }
    
    public flattenDays(): Array<moment.Moment> {
        const days = _.chain(this.weeks)
            .pluck('days')
            .flatten().value();
        return days;
    }  


}
