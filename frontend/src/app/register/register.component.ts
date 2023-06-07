import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform = this.fb.group({
   email:[''],
    InstitutionName:[''],
    phoneno:[''],
    password:[''],
    repassword:['']

  })

  constructor(private ds:AuthserviceService,private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  registercheck(){
    var email:any = this.registerform.value.email
    var InstituteName:any = this.registerform.value.InstitutionName
    var phoneno:any = this.registerform.value.phoneno
    var password:any = this.registerform.value.password
    var repassword:any = this.registerform.value.repassword


    if(this.registerform.valid){
      
      this.ds.register(email,InstituteName,phoneno,password,repassword)
      .subscribe((result:any)=>{
        console.log("result:",result);
        if(result){
          alert("registered successfully")
          this.route.navigateByUrl('')
        }else{
          alert('invalid form')
        }
      },(result)=>{
        
        console.log("test:",result.error.message)
        alert(result.error.message)
        this.route.navigateByUrl('')
        

      })
      }

  }
}

//     if(this.registerform.valid){

//       this.ds.register(username,InstituteName,phoneno,password,repassword)
//       .subscribe((result)=>{
       
//         console.log("result : ",result);

//     if(result){
//       alert("Register successfully")
//       this.route.navigateByUrl("")
//     }
    
//   else{
//     alert("not a valid form")
//   }

      
//   },(result)=>{
//     console.log("test : ",result.error.message)
//     alert(result.error.message)
//   })
// }
// }




    




