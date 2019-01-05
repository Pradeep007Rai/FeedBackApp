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
import { NavbarComponent } from './components/navbar.component';
import { AdminLandingPageComponent } from './pages/admin-landing/admin-landing-page.component';
import { StudentLandingPageComponent } from './pages/student-landing/student-landing-page.component';
import { RouterModule } from '@angular/router';
import { AboutusPageComponent } from './pages/aboutus/aboutus-page.component';
import { PagenotfoundPageComponent } from './pages/pagenotfound/pagenotfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionSectionComponent,
    SectionsComponent,
    NavbarComponent,
    AdminLandingPageComponent,
    StudentLandingPageComponent,
    AboutusPageComponent,
    PagenotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'student-landing', component: StudentLandingPageComponent},
      {path: 'admin-landing', component: AdminLandingPageComponent},
      {path: 'aboutus', component: AboutusPageComponent},
      {path: 'welcome', component: AdminLandingPageComponent},
      {path: '**', component: PagenotfoundPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,
             NavbarComponent]
})
export class AppModule { }
