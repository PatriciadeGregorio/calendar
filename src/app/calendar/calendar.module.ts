import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { CellDatePipe } from './pipes/cell-date.pipe';



@NgModule({
  declarations: [
    EventsComponent,
    CellDatePipe
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ScrollingModule,
    MatTableModule,
    TableVirtualScrollModule
  ]
})
export class CalendarModule { }
