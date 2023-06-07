import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-typebuilding',
  templateUrl: './typebuilding.component.html',
  styleUrls: ['./typebuilding.component.css']
})
export class TypebuildingComponent implements OnInit {

  buildingform = this.fb.group({

    buildingname:[''],
     buildingtype:[''],
     floornumber:[''],
     location:['']
 
 
   })
 

  constructor(private ds: AuthserviceService, private route: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  
  buildfun(){
    var email=(localStorage.getItem('currentmail')||'')

    var buildingname:any = this.buildingform.value.buildingname
    var buildingtype:any = this.buildingform.value.buildingtype
    var floornumber:any = this.buildingform.value.floornumber
    var location:any = this.buildingform.value.location



    if(this.buildingform.valid){
      console.log("buli",buildingname)

      this.ds.building(email,buildingname,buildingtype,floornumber,location)
      .subscribe((result:any)=>{
        console.log("result:",result);
        if(result){
          alert("lsgi enetered successfully")
          this.route.navigateByUrl('nextquestion')
        }else{
          alert('invalid form')
        }
      },(result:any)=>{

        console.log("test:",result.error.message)
        alert(result.error.message)
        this.route.navigateByUrl('nextquestion')


      })
      }

  }

}
