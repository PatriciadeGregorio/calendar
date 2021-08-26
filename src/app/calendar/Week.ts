
export class Week {
    days = [];
    number;
    month;
    year;

    constructor({day}){
        for (let i = 1; i <= 7; i++) {
            this.days.push(day.clone().isoWeekday(i));
        }
        this.number = day.isoWeek();
        this.month = day.format('MMMM');
        this.year = day.format('YYYY');
    }

    public next() {
        let sunday = this.days[6];
        let mondayAfter = sunday.clone().add(1, 'days');
        return new Week({ day: mondayAfter });
    }

    public prev() {
        let monday = this.days[0];
        let sundayBefore = monday.clone().subtract(1, 'days');
        return new Week({ day: sundayBefore });
    }

    public Monday() {
        return this.days[0];
    }
    public Tuesday() {
        return this.days[1];
    }
    public Wednesday() {
        return this.days[2];
    }
    public Thursday() {
        return this.days[3];
    }
    public Friday() {
        return this.days[4];
    }
    public Saturday() {
        return this.days[5];
    }
    public Sunday() {
        return this.days[6];
    }
}