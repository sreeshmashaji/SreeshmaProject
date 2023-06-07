const dab=require("./db")

const acc=(email,mainEntranceAccess,steps,handrail,ramp,ramprail,twoHandrail) =>{
  
  return dab.Form.findOne({"email":email})
  .then(user =>{
    console.log("USER",user)
  if(user){
    
    user.access.push({
        "mainEntranceAccess":mainEntranceAccess,
        "steps":steps,
        "handrail":handrail,
        "ramp":ramp,
        "ramprail":ramprail,
        "twoHandrail":twoHandrail

    })
    user.save()
    return{
     statusCode:220,
      status:true,
      message:"entered successfully"
    }
  } else{
    return{
      statusCode:400,
      status:false,
      message:" failed"
    }

  }
  
  })
}



const detailslist = () => {
  return dab.Form.find()
      .then(data => {
          if (data) {
              return {
                  statusCode: 200,
                  status: true,
                  message: "successful",
                  data: data
              }
          } else {
              return {
                  statusCode: 400,
                  status: false,
                  message: "unsuccessfull"
              }
          }
      })
}



module.exports={acc,detailslist}