import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-nextquestion',
  templateUrl: './nextquestion.component.html',
  styleUrls: ['./nextquestion.component.css']
})
export class NextquestionComponent implements OnInit {
  accessform = this.fb.group({

    mainEntranceAccess:[''],
    steps:[''],
    handrail:[''],
    ramp:[''],
    ramprail:[''],
    twoHandrail:['']
    
 
   })

  constructor(private ds: AuthserviceService, private route: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  accessfun(){
    var email=(localStorage.getItem('currentmail')||'')

    var mainEntranceAccess:any = this.accessform.value.mainEntranceAccess
    var steps:any = this.accessform.value.steps
    var handrail:any = this.accessform.value.handrail
    var ramp:any = this.accessform.value.ramp
    var ramprail:any = this.accessform.value.ramprail

    var twoHandrail:any = this.accessform.value.twoHandrail





    if(this.accessform.valid){
      console.log("builll",steps)

      this.ds.buildingaccess(email,mainEntranceAccess,steps,handrail,ramp,ramprail,twoHandrail)
      .subscribe((result:any)=>{
        console.log("result:",result);
        if(result){
          alert("lsgi enetered successfully")
          this.route.navigateByUrl('')
        }else{
          alert('invalid form')
        }
      },(result:any)=>{

        console.log("test:",result.error.message)
        alert(result.error.message)
        this.route.navigateByUrl('')


      })
      }

  }

  
  

}
