import { Component, OnInit, Input } from '@angular/core';
import { QuestionComponent } from '../questionComponent/question.component';
import { QuestionModule } from 'src/app/model/question/question.module';
import { SectionService } from 'src/app/services/section.service';
import { SectionModule } from 'src/app/model/section/section.module';
import { timeout } from 'q';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit {

  header: string;
  questionModel: QuestionModule[];
  error: any;
  msg: any;
  @Input() section: SectionModule;

  ngOnInit() {
    this.header = 'Here comes the Header';
  }
  constructor() { }
}
