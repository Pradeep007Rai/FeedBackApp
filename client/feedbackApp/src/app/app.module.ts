import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './components/questionComponent/question.component';
import { QuestionSectionComponent } from './components/questionSectionComponent/question-section.component';
import { SectionsComponent } from './components/sectionsComponent/sections.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionSectionComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
