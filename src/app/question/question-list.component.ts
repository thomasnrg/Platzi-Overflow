import { Component }  from "@angular/core";
import { Question } from "./question.model"

const q = new Question(
  'Como reutilizo un componente en IOS',
  'Esta es mi pregunta...',
  new Date(),
  'none'
)

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: [`
      i {
        font-size: 48px;
      }

      i.help{
        width: 48px !important;
        height: 48px !important;
        font-size: 48px !important;
        padding: 0px;
      }

      .add-question{
        position: fixed;
        bottom: 30px;
        right: 30px;
        font-size: 24px;
        z-index: 200;
      }
    `]
})

export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q)
}
