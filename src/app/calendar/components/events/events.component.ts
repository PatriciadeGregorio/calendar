import { Component, OnInit } from '@angular/core';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { EMPLOYEE_ARRAY } from 'src/app/core/data/employeeArray';
import { IEmployee } from '../../models/employee.model';
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
    this.displayedColumns.map(elem => [elem, '1']),
    );
  private data = this.buildData();
  public dataSource = new TableVirtualScrollDataSource(this.data);


  constructor() { }

  ngOnInit(): void {
  }

  private mapColumns(): Array<string> {
    const columns: Array<string> = this.calendar.flattenDays().map(elem => elem.format('YYYY-MM-DD'));
    return ['fullname', ...columns];
  }

  private loadEmployees(): void {
    for (let i=1; i <= 1000; i++){
      this.employees = this.employees.concat(EMPLOYEE_ARRAY);
    }
    this.employees = this.employees.map((emp,i) => ({...emp, _id: i.toString()} ));
  }

  private buildData(): Array<any> {
    this.loadEmployees();
    const data = [];
    this.employees.forEach(({firstName, lastName})=> {
      data.push({...this.genericData, fullname: `${firstName} ${lastName}`});
    });
  return data;
  }

}
