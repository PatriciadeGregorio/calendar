import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { CellDatePipe } from './pipes/cell-date.pipe';
import { AddEventDialogComponent } from './dialogs/add-event-dialog/add-event-dialog.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EventsComponent,
    CellDatePipe,
    AddEventDialogComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ScrollingModule,
    TableVirtualScrollModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class CalendarModule { }
