import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { last } from 'rxjs';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit
 {
  questionform = this.fb.group({

   lsgi:[''],
    namelsgi:[''],
    ward:['']


  })

  constructor(private ds: AuthserviceService, private route: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  // email = (localStorage.getItem('currentmail') || '')

  // lsgi: any
  // namelsgi: any
  // ward: any

  // lsgifun() {
    
  //      this.ds.lsgi(this.email,this.lsgi,this.namelsgi,this.ward)
       
  //     .subscribe((result:any)=>{
  //       console.log("email",this.email)
  //       console.log("result",result)
  //       alert(result.message)
  //       this.route.navigateByUrl('register')
  //     }
  //     )
  // }

  // lsg(){
  //   this.route.navigateByUrl('register')
  // }



  lsgifun(){
    var email=(localStorage.getItem('currentmail')||'')

    var lsgi:any = this.questionform.value.lsgi
    var namelsgi:any = this.questionform.value.namelsgi
    var ward:any = this.questionform.value.ward


    if(this.questionform.valid){
      console.log("lsgi",lsgi)

      this.ds.lsgi(email,lsgi,namelsgi,ward)
      .subscribe((result:any)=>{
        console.log("result:",result);
        if(result){
          alert("lsgi enetered successfully")
          this.route.navigateByUrl('typebuilding')
        }else{
          alert('invalid form')
        }
      },(result:any)=>{

        console.log("test:",result.error.message)
        alert(result.error.message)
        this.route.navigateByUrl('typebuilding')


      })
      }

  }
}






