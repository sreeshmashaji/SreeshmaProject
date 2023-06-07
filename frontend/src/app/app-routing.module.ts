import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FulldetailesComponent } from './fulldetailes/fulldetailes.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NextquestionComponent } from './nextquestion/nextquestion.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { TypebuildingComponent } from './typebuilding/typebuilding.component';
import { AdimpageComponent } from './adimpage/adimpage.component';
// import { ShamilComponent } from './shamil/shamil.component';


const routes: Routes = [
  
  {path:'audit',component:AuditComponent},
  {path: '', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'carousal', component: CarousalComponent},
  
  { path:'question',component:QuestionComponent},
  {path:'nextquestion',component:NextquestionComponent},
  {path:'news',component:NewsComponent},
  {path:'typebuilding',component:TypebuildingComponent},
  {path:'fulldetailes',component:FulldetailesComponent},
  {path:'adminpage',component:AdimpageComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
