
const jwt=require('jsonwebtoken')
const db=require('./db')

const nodemailer=require('nodemailer')





    



    const register=(email,InstituteName,phoneno,password,repassword)=>{
       

      return db.User.findOne({email})
      .then(user=>{                     
        if(user){
          return{
            statusCode:404,
            status:false,
            message:"already a user"
          }
        }
        else{
            
           
          const newUser= new db.User({
            email,
            InstituteName,
            phoneno,
            password,
            repassword
    
          })
          newUser.save()        

          
          //  if(newUser)
          //  {

            // verfymail(req.body.email,newUser_id)
            return{
              statusCode:200,
              status:true,
              message:"registered successfully"
            }
          //  }
          //  else{
          //   return{
          //     statusCode:400,
          //     status:false,
          //     message:"register  failed"

          //   }
          //  }

        }

        
        
       
    
      })
    }



    
      

     const login=(email,password) =>
  {
return db.User.findOne({"email":email,"password":password})
.then(user=>{
  if(user){

    console.log("user",user)
    currentmail=user.email
    
         const token=jwt.sign({currentmail:email}
          ,"superkey@123")

        return{
            statusCode:200,
            status:true,
            message:"successfull",
           currentmail,
          
            token
        }
        
      }
      else 
      {
        
        return {
            statusCode:400,
            status:false,
            message:"Password incorrect"
        }
      }
    }
    

)}




      module.exports={register,login}

      
    
    