const express = require("express");
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/person');

app.post('/person', async(req,res)=>{
    try{
        const data =req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})

app.get('/',function(req,res){
    res.send('Welcome to my place')
})

app.get('/121',function(req,res){
    res.send('Welcome to my work')
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})