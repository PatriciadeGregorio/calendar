import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { CONSTANTS } from 'src/app/core/constants';
import { EMPLOYEE_ARRAY } from 'src/app/core/data/employeeArray';
import { AddEventDialogComponent } from '../../dialogs/add-event-dialog/add-event-dialog.component';
import { IEmployee, IEvent } from '../../models/employee.model';
import { MomentUtilsService } from '../../services/moment-utils.service';
import { WeekCalendar } from '../../weekCalendar';
import * as _ from 'underscore';

export interface IData {
  fullname: string;
  id: string;
  [key: string]: string; // Labels with dates
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  private calendar: WeekCalendar = new WeekCalendar();
  private employees: Array<IEmployee> = [];
  public displayedColumns: Array<string> = this.mapColumns();
  private genericData: { [key: string]: string } = Object.fromEntries(
    this.displayedColumns.map(elem => [elem, ' ']),
  );
  private data: Array<IData> = this.buildData();
  public dataSource: TableVirtualScrollDataSource<IData> = new TableVirtualScrollDataSource(this.data);
  public dataSourceToSearch: TableVirtualScrollDataSource<IData> = new TableVirtualScrollDataSource(this.data);
  public searchForm = {
    employee: ''
  };

  constructor(private readonly momentUtilsService: MomentUtilsService, private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  private mapColumns(): Array<string> {
    const columns: Array<string> = this.calendar.flattenDays().map(elem => elem.format('YYYY-MM-DD'));
    return [CONSTANTS.FULLNAME_COLUMN, ...columns];
  }

  private loadEmployees(): void {
    // for (let i = 1; i <= 1000; i++){
      this.employees = this.employees.concat(EMPLOYEE_ARRAY);
    // }
    this.employees = this.employees.map((emp, i) => ({ ...emp, _id: i.toString() }));
  }

  private buildData(): Array<IData> {
    this.loadEmployees();
    const data = [];
    this.employees.forEach(({ firstName, lastName, _id }) => {
      data.push({ ...this.genericData, fullname: `${firstName} ${lastName}`, id: _id });
    });
    return data;
  }

  public isWeekend(date: string): boolean {
    return this.momentUtilsService.isWeekend(date);
  }

  public isToday(date: string): boolean {
    return this.momentUtilsService.isToday(date);
  }

  public isEvent({ id }: { id: string }, date: string): boolean {
    let found: boolean = false;
    const employee: IEmployee = this.employees.find(empl => empl._id === id);
    employee.events.forEach((event: IEvent) => {
      if (this.momentUtilsService.inRange(event.from, event.to, date)) {
        found = true;
      }
    });
    return found;
  }

  public showAddShift(element: IData, column: string): boolean {
    const isWeekend: boolean = this.isWeekend(column);
    const isToday: boolean = this.isToday(column);
    const isEvent: boolean = this.isEvent(element, column);
    if (column === CONSTANTS.FULLNAME_COLUMN) {
      return false;
    }
    if (isWeekend || isToday || isEvent) {
      return false;
    }
    return true;
  }

  public openDialog(): void {
    this.dialog.open(AddEventDialogComponent);
  }

  public searchEmployees(newSearch: string): void {
    const dataSourceCopy: Array<IData> = _.clone(this.dataSourceToSearch.data);
    const newSearching: Array<IData> = dataSourceCopy.filter(data => {
      return data.fullname.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
    });
    this.dataSource.data = newSearching;
  }

}