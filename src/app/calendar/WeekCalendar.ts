import * as moment from 'moment';
import * as _ from 'underscore';
import { Week } from './Week';

export class WeekCalendar {
    private today = moment();
    private currentDay = this.today.clone();
    private weeks = [];
    private calendarSize: number = 51;

    constructor() {
        this.updateCalendar();
    }

    private updateCalendar(date?): void {
        var newWeeks = [];
        var firstDayOfMonth = moment().startOf('week');
        var startDate = date ? moment(date) : firstDayOfMonth;
        var startWeek;
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


    public getWeeks() {
        return this.weeks;
    }
    public getToday() {
        return this.today;
    }
    public getCurrent() {
        return this.currentDay;
    }
    public setCurrent(date) {
        this.currentDay = date;
        this.updateCalendar(date);
    }
    public getFirstDay() {
        return this.weeks[0].Monday();
    }
    public getLastDay() {
        return this.weeks[this.weeks.length - 1].Sunday();
    }
    
    public nextWeek() {
        var next = this.weeks[this.weeks.length - 1].next();
        this.weeks.shift();
        this.weeks.push(next);
    };
    
    public prevWeek() {
        var prev = this.weeks[0].prev();
    
        this.weeks.pop();
        this.weeks.unshift(prev);
    }
    
    public flattenDays() {
        var days = _.chain(this.weeks)
            .pluck('days')
            .flatten().value();
        return days;
    }  


}
