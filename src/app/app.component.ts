import { Component } from '@angular/core';
import {DataService} from "./features/services/get-card-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giftvalley';

  constructor() {
    console.log()
  }
}
