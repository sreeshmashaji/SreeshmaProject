// const nodemailer=require('nodemailer')
// const db=require('./db')



// const verfymail=async(email,user_id)=>{
//     try{
//        const transporter= nodemailer.createTransport({
//             host:'smtp.gmail.com',
//             port:587,
//             secure:false,
//             requireTLS:true,
//             auth:{
//                 user:'sreeshma3023@gmail.com',
//                 pass:'Swaroop123#**'

//             }
//         });

//         const mailoption={
//             from:'sreeshma3023@gmail.com',
//             to:email,
//             subject:'For verification of app',
//             html:'<p> Hii '+email+'please click here to <a href="http://localhost:4200/verify?id='+user_id+'">verify</a> your mail.</p>'

//         }
//         transporter.sendMail(mailoption,function(error,info){
//             if(error){
//                 console.log(error)
//             }
//             else{
//                 console.log("Email has been sent :-",info.response)
//             }
//         })

//     }
//     catch(error){
//        console.log("something went wrong ,try again!!")

//     }
// }

// module.exports=  {verfymail}