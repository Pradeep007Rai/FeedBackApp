import { QuestionModule } from '../question/question.module';

export interface SectionModule {
  sectionId: number;
  sectionName: string;
  questions: QuestionModule[];
}
