import { Component } from '@angular/core';
import { SectionService } from './services/section.service';
import { SectionModule } from "./model/section/section.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

}
