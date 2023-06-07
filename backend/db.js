const mongoose = require('mongoose')
// require("dotenv").config()


const uri = 'mongodb://127.0.0.1:27017/DF';
mongoose.set('strictQuery', true);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("database connection")
    })
}

connectWithDB()

const User = mongoose.model('User',{
   email:String,
    InstituteName:String,
    phoneno:Number,
    password:String,
    repassword:String,
   form:Array
})

const Form = mongoose.model('form',{
    email:String,
     lsgi:String,
     namelsgi:String,
     ward:String,
     Date:Date,
    //  buildingname:String,
    //  buildingtype:String,
    //  floornumber:Number,
    //  location:String
    details:Array,
    access:Array

    

 })

module.exports={User,Form}