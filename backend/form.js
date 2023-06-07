// const rl=require('./registerlog')
// const dab=require("./db")

// const lsgi=(email,lsgi,namelsgi,ward) =>{
// //  const data=[{
// //   "lsgi":lsgi,

// //   "name of lsgi":namelsgi,
// //   "no of wards":ward,
// //   "status":"success", 
// //   "Date": new Date()

// //  }]
//   return dab.User.findOne({"email":email})
//   .then(user =>{
    
//   if(user){
    
//     user.form.push({
//       "lsgi":lsgi,

//   "name of lsgi":namelsgi,
//   "no of wards":ward,
//   "status":"success", 
//   "Date": new Date()

//     })
//     user.save()
   
//     return{
//      statusCode:220,
//       status:true,
//       message:"Data entered successfully",
//       // usedmail,
//     }
//   } else{
//     return{
//       statusCode:400,
//       status:false,
//       message:" failed"
//     }

//   }
  
//   })
// }





// module.exports={lsgi}
