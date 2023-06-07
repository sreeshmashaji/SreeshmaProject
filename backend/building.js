

// const dab=require('./db')

// const build=(email,buildingname,buildingtype,floornumber,location) =>{
//     // 
//       return dab.Form.findOne({"email":email})
//       .then(user =>{
        
//       if(user){
       
//                     const newUser= new dab.Form({
//                         "buildingname":buildingname,
//                         "buildingtype":buildingtype,
                  
//                     "floornumber":floornumber,
//                     "location":location,
                     
                   
                  
//                       })
//                       newUser.save()
        
//         return{
//             statusCode:200,
//             status:true,
//             message:"you submitted it secondtime"
//           }
       
//       } else{
//         const newUser= new dab.Form({
//             "buildingname":buildingname,
//             "buildingtype":buildingtype,
      
//         "floornumber":floornumber,
//         "location":location,
         
       
      
//           })
//           newUser.save()
         
//           return{
//            statusCode:220,
//             status:true,
//             message:"Data entered successfully",
//             // usedmail,
//           }
    
//       }
      
//       })
//     }
    
    
    
    
    
//     module.exports={build}

// // const dab=require('./db')

// // const build=(buildingname,buildingtype,floornumber,location) =>{
// //     //  const data=[{
// //     //   "lsgi":lsgi,
    
// //     //   "name of lsgi":namelsgi,
// //     //   "no of wards":ward,
// //     //   "status":"success", 
// //     //   "Date": new Date()
    
// //     //  }]
// //       return dab.Form.findOne({"buildingname":buildingname})
// //       .then(user =>{
        
// //       if(user){
// //         const newUser= new dab.Form({
// //             "buildingname":buildingname,
// //             "buildingtype":buildingtype,
      
// //         "floornumber":floornumber,
// //         "location":location,
         
       
      
// //           })
// //           newUser.save()
// //         return{
// //             statusCode:200,
// //             status:true,
// //             message:"you submitted it secondtime"
// //           }
       
// //       } else{
// //         if(user){
// //             const newUser= new dab.Form({
// //                 "buildingname":buildingname,
// //                 "buildingtype":buildingtype,
          
// //             "floornumber":floornumber,
// //             "location":location,
             
           
          
// //               })
// //               newUser.save()
// //           return{
// //            statusCode:220,
// //             status:true,
// //             message:"Data entered successfully",
// //             // usedmail,
// //           }
    
// //       }
      
// //       )}
// //     }
    
    
    
    
    
// //     module.exports={build}