import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar';
  constructor() {
    moment().locale('es');
  }

}
