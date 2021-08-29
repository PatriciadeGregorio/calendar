export class Week {
    private days: Array<moment.Moment> = [];
    constructor({day}){
        for (let i = 1; i <= 7; i++) {
            this.days.push(day.clone().isoWeekday(i));
        }
    }

    public next(): Week {
        let sunday = this.days[6];
        let mondayAfter = sunday.clone().add(1, 'days');
        return new Week({ day: mondayAfter });
    }

    public prev(): Week {
        let monday = this.days[0];
        let sundayBefore = monday.clone().subtract(1, 'days');
        return new Week({ day: sundayBefore });
    }
}