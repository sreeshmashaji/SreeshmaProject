// const { emit } = require('nodemon');
// const db=require('./db')
// const generateOTP=require('./generateotp');
// const { hashedData } = require('./hashData');
// const sendEmail=require('./sendEMAIL')
// // const hashData=require('./hashData')

// const{AUTH_MAIL}=process.env;

// const sendOTP=async({email,subject,message,duration=1})=>
//     {
//         try{
//             if(!(email && message && subject)){
//                throw Error(" provide values for email,subject and message ")
//             }
//             //clear any old record
//             await db.deleteOne({email})
//             const generateOTP=await generateOTP()

//             const mailOptions={
//                 from:AUTH_MAIL,
//                 to:email,
//                 subject,
//                 html:`<p>${message}</p><p style="color:tomato; font-size:25px;letter-spacing:2px;">
//                 <b>${generateOTP}</b></p><p>This code expires in ${duration} hour(s) </b>.</p>`,
//             }
           

//             await sendEmail(mailOptions);

//             const hashedOTP=await hashedData(generateOTP)
//             const newOTP=await new Otp({
//                 email,
//                 otp:hashedOTP,
//                 crDate:Date.now(),
//                 exDate:Date.now()+3600000*+duration,
//             })
//             const createdOTPRecord=await newOTP.save();
//             return createdOTPRecord;

//         }
//         catch(error){
//             throw error;

//         }
//     }

//     module.exports={sendOTP}