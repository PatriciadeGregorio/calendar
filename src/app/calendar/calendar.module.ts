import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';



@NgModule({
  declarations: [
    EventsComponent
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
