import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.componet.html'
})

export class AnswerFormComponent {
  onSubmit(form: NgForm) {
    console.log(form.value.description)
  }
}
