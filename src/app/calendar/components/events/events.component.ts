import { Component, OnInit } from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { EMPLOYEE_ARRAY } from 'src/app/core/data/employeeArray';
import { IEmployee } from '../../models/employee.model';
import { MomentUtilsService } from '../../services/moment-utils.service';
import { WeekCalendar } from '../../weekCalendar';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private calendar: WeekCalendar = new WeekCalendar();
  private employees: Array<IEmployee> = [];
  public displayedColumns = this.mapColumns();
  private genericData = Object.fromEntries(
    this.displayedColumns.map(elem => [elem, ' ']),
    );
  private data = this.buildData();
  public dataSource = new TableVirtualScrollDataSource(this.data);


  constructor(private readonly momentUtilsService: MomentUtilsService) { }

  ngOnInit(): void {
  }

  private mapColumns(): Array<string> {
    const columns: Array<string> = this.calendar.flattenDays().map(elem => elem.format('YYYY-MM-DD'));
    return ['fullname', ...columns];
  }

  private loadEmployees(): void {
    for (let i = 1; i <= 1000; i++){
      this.employees = this.employees.concat(EMPLOYEE_ARRAY);
    }
    this.employees = this.employees.map((emp,i) => ({...emp, _id: i.toString()} ));
  }

  private buildData(): Array<any> {
    this.loadEmployees();
    const data = [];
    this.employees.forEach(({firstName, lastName, _id})=> {
      data.push({...this.genericData, fullname: `${firstName} ${lastName}`, id: _id});
    });
    return data;
  }

  public isWeekend(date: string): boolean {
    return this.momentUtilsService.isWeekend(date);
  }

  public isToday(date: string): boolean {
    return this.momentUtilsService.isToday(date);
  }

  public isEvent(element): boolean {
    console.log(element);
    return false;
  }

}