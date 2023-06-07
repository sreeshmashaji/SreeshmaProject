const express=require('express')//export express
const jwt = require('jsonwebtoken')
const ds =require('./registerlog')
const fm=require('./form')
const dt=require('./details')
// const bd=require('./building')
const ag=require('./again')
const ba=require('./buldingaccess')

// const bodyParser=express.json
// const otp=require('./otp')
// const sendEMAIL=require('./sendEMAIL')





const cors=require('cors')



//app creation
const app=express()
// app.use(bodyParser())
app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'
}))


const appMiddleware=(req,res,next)=>{
    console.log("Application specific Middleware")
    next()
}


const jsontokenmiddleware=((req,res,next)=>{
    try{
        const token=req.headers["x-access-token"]
        const data=jwt.verify(token,"superkey@123")
        if(req.body.email == data.currentmail){
            next()
        }
    }
    catch{
        return{
            statusCode:400,
            status:false,
            message:"login first"
        }
    }

})

app.use(appMiddleware)


app.post('/register',(req,res)=>{

    ds.register(req.body.email,req.body.InstituteName,req.body.phoneno,req.body.password ,req.body.repassword)
    .then(user=>{
    if(user)
    {
        res.status(user.statusCode).json(user)
        
    
    }
})
    

})



app.post('/login',(req,res)=>{

    ds.login(req.body.email,req.body.password)
    .then(user=>{
    if(user)
    {
        res.status(user.statusCode).json(user)
        
    
    }
   
})})



app.post('/lsg',(req,res)=>{

    nx.lsg(req.body.email,req.body.lsgi,req.body.namelsgi,req.body.ward)
    .then(user=>{
    if(user)
    {
        res.status(user.statusCode).json(user)
        
    
    }
})
    

})

// app.post('lsgi',(req,res)=>{

//    fm.lsgi(req.body.email,req.body.lsgi,req.body.namelsgi,req.body.ward)
//     .then(user=>{
//     if(user)
//     {
//         console.log("us",user)
//         res.status(user.statusCode).json(user)
        
    
//     }
   
// })
// })


app.post('/li',(req,res)=>{

    ag.li(req.body.email,req.body.lsgi,req.body.namelsgi,req.body.ward)
     .then(user=>{
     if(user)
     {
         console.log("us",user)
         res.status(user.statusCode).json(user)
         
     
     }
    
 })
 })
 app.post('/det',(req,res)=>{

    dt.det(req.body.email,req.body.buildingname,req.body.buildingtype,req.body.floornumber,req.body.location)
     .then(user=>{
     if(user)
     {
         console.log("us",user)
         res.status(user.statusCode).json(user)
         
     
     }
    
 })
 })

 app.post('/acc',(req,res)=>{

        ba.acc(req.body.email,req.body.mainEntranceAccess,req.body.steps,req.body.handrail,req.body.ramp,req.body.ramprail,req.body.twoHandrail)
         .then(user=>{
         if(user)
         {
             console.log("us",user)
             res.status(user.statusCode).json(user)
             
         
         }
        
     })
     })

     app.get('/detailslist',(req,res)=>{
        ba.detailslist()
        .then(student=>{
                res.status(student.statusCode).json(student)
            } 
        
        )
    })



//  app.post('/build',(req,res)=>{

//     bd.build(req.body.email,req.body.buildingname,req.body.buildingtype,req.body.floornumber,req.body.location)
//      .then(user=>{
//      if(user)
//      {
//          console.log("us",user)
//          res.status(user.statusCode).json(user)
         
     
//      }
    
//  })
//  })
// app.post("/sendOTP",async (req,res)=>{
//     try{
//          const {email,subject,message,duration}=req.body
//          const createdOTP=await sendOTP({
//             email,
//             subject,
//             message
//          })

//     }
//     catch(error){

//     }
// })
// app.post("/sendOTP",async(req,res)=>{
//     try{
//          otp.sendOTP(req.body.email,req.body.subject,req.body.message,req.body.duration)

//          const createdOTP=await sendOTP({
//             email,
//             subject,
//             message,
//             duration
//          })
//          res.status(200).json(createdOTP)

//     }
//     catch(error){

//         res.status(400).send(error.message)

//     }
// })



    




app.listen(3001,()=>{
    console.log("Server listening to port number 3001");
})