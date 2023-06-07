const dab=require("./db")

const det=(email,buildingname,buildingtype,floornumber,location) =>{
  // const data=[{
  //   "buildingname":buildingname,

  //     "buildingtype":buildingtype,
  //     "floornumber":floornumber,
  //     "location": location
  // }]
  return dab.Form.findOne({"email":email})
  .then(user =>{
    console.log("USER",user)
  if(user){
    
    user.details.push({
      "buildingname":buildingname,

      "buildingtype":buildingtype,
      "floornumber":floornumber,
      "location": location

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



module.exports={det}