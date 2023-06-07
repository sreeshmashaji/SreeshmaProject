

const dab=require('./db')

const li=(email,lsgi,namelsgi,ward) =>{
    //  const data=[{
    //   "lsgi":lsgi,
    
    //   "name of lsgi":namelsgi,
    //   "no of wards":ward,
    //   "status":"success", 
    //   "Date": new Date()
    
    //  }]
      return dab.Form.findOne({"email":email})
      .then(user =>{
        
      if(user){
        const newUser= new dab.Form({
            "email":email,
            "lsgi":lsgi,
      
        "namelsgi":namelsgi,
        "ward":ward,
         
        "Date": new Date()
      
          })
          newUser.save()
        return{
            statusCode:200,
            status:true,
            message:"you submitted it secondtime"
          }
       
      } else{
        const newUser= new dab.Form({
            "email":email,
            "lsgi":lsgi,
      
        "namelsgi":namelsgi,
        "ward":ward,
         
        "Date": new Date()
      
          })
          newUser.save()
         
          return{
           statusCode:220,
            status:true,
            message:"Data entered successfully",
            // usedmail,
          }
    
      }
      
      })
    }
    
    
    
    
    
    module.exports={li}