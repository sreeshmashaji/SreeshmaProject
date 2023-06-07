import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { CarousalComponent } from './carousal/carousal.component';
import{HttpClientModule}from '@angular/common/http';

import { AuditComponent } from './audit/audit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './question/question.component';
import { NextquestionComponent } from './nextquestion/nextquestion.component';
import { NewsComponent } from './news/news.component';
import { TypebuildingComponent } from './typebuilding/typebuilding.component';
import { FulldetailesComponent } from './fulldetailes/fulldetailes.component';
import { AdimpageComponent } from './adimpage/adimpage.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CarousalComponent,
  
    AuditComponent,
    QuestionComponent,
    NextquestionComponent,
    NewsComponent,
    TypebuildingComponent,
    FulldetailesComponent,
    AdimpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
