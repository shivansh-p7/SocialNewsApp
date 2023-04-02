const { Router } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const route=require('./routes/route');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://shivanshsharma:76Xjx6fMmlcP51HZ@shivansh-p7.zwfahec.mongodb.net/shivanshsharma")
     .then(()=>console.log("MongoDB is connected"))
     .catch((err)=>{console.log(err.message)});




app.use("/",route);




app.listen(process.env.PORT || 3000,()=>{
    console.log(`server is running on port ${process.env.PORT || 3000}`);
})