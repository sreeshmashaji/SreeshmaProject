import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  password:any=""
  email: any;
  adminuser:any;

  constructor(private root:Router,private ds:AuthserviceService) { }

  ngOnInit(): void {
  }

  login(){
    var email:any=this.email
      var password:any=this.password
      var adminuser:any=this.adminuser

      console.log("admin",adminuser)
  
      this.ds.login(email,password)
       .subscribe((result:any)=>{
        console.log("result: ",result);
        
        alert(result.message)
        
       
        localStorage.setItem("currentmail",JSON.stringify(email))
        localStorage.setItem("token",JSON.stringify(result.token))
        if(adminuser=="admin"){
          this.root.navigateByUrl('adminpage')
        }
        else{
        this.root.navigateByUrl('audit')
        }
        var  em=(localStorage.getItem('currentmail')||'')
        console.log(em);
        
  
       },(result:any)=>{
        alert(result.error.message)
       })
  }
  

}
