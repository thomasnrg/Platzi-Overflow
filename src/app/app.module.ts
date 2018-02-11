import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { QuestionDetailComponet } from './question/question-detail.componet';
import { AnswerFormComponent } from './answer/answer-form.componet';
import { SigninScreenComponet }  from "./auth/signin-screen.componet";

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponet,
    AnswerFormComponent,
    SigninScreenComponet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
