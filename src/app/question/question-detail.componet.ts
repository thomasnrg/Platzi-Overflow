import { Component } from '@angular/core'
import { Question } from './question.model'

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponet {
  question: Question = new Question(
    'Esta es una nueva pregunta sobre IOS',
    'Tengo una pregunta acerca de IOS...',
    new Date,
    'devicon-apple-original'
  );
}
