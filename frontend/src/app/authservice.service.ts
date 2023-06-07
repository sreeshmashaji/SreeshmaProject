import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuiltinType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// const options={
//   headers:new HttpHeaders
//   }

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  // getOptions()
  // {
  //   var Token=JSON.parse(localStorage.getItem('token')||'')
  //   var headers=new HttpHeaders()
  //   if(Token){
  //     headers=headers.append('x-access-token',Token)
  //     options.headers=headers
  //   }
    
  //   return options
  // }

 


  constructor(private http:HttpClient) { }
  register(email:any,InstituteName:any,phoneno:any,password:any,repassword:any){
    const data={
      email,
      InstituteName,
      phoneno,
      password,
      repassword
    }
    return this.http.post("http://localhost:3001/register",data)
  }


  login(email:any,password:any){
    const data={
      email,password
    }
    return this.http.post('http://127.0.0.1:3001/login',data)
  }

  
  lsgi(email:any,lsgi:any,namelsgi:any,ward:any){
    
    
    const data={
     email,
      lsgi,
      namelsgi,
      ward
    }
    
  return this.http.post("http://localhost:3001/li",data)
  }
  
building(email:any,buildingname:any,buildingtype:any,floornumber:any,location:any){
    
    
  const data={
   email,
    buildingname,
    buildingtype,
    floornumber,
    location
  }
  
return this.http.post("http://localhost:3001/det",data)
}


buildingaccess(email:any,mainEntranceAccess:any,steps:any,handrail:any,ramp:any,ramprail:any,twoHandrail:any){
    
    
  const data={
    email,mainEntranceAccess,steps,handrail,ramp,ramprail,twoHandrail
  }
  
return this.http.post("http://localhost:3001/acc",data)
}

detailsfun(){
  return this.http.get('http://localhost:3001/detailslist')
}
}



// building(email:any,buildingname:any,buildingtype:any,floornumber:any,location:any){
    
    
//   const data={
//    email,
//     buildingname,
//     buildingtype,
//     floornumber,
//     location
  
// return this.http.post("http://localhost:3001/build",data)
// }
// }







