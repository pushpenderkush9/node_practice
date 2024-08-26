const mongoose = require('mongoose');
const mongooseURl = 'mongodb://localhost:27017/firstprograme'
mongoose.connect(mongooseURl)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to ......");
});
db.on('error',(err)=>{
    console.log(" an error......");
});
db.on('disconnected',()=>{
    console.log("disconnected to server......");
});