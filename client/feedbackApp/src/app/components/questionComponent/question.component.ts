import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionModule } from 'src/app/model/question/question.module';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  questionModel: QuestionModule;
  @Input() question: QuestionModule ;
  @Output() answered: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.questionModel = this.question;
    this.question.answer = 0;
  }

  onAnswer(): void {
   this.answered.emit(this.question.answer);
  }

  onClick(): void {
      this.answered.emit(this.question.answer);
  }

}
