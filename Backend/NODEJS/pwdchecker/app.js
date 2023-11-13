const express=require("express");

const app=express();
let PORT=5000;
const sendMail = require("./sendMail");



app.get("/",(req,res)=>{
    res.send("I am a  server");
});

app.get("/sendmail",sendMail);
const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`i am live in port no , ${PORT}`);
        })
    }  catch (error) {}

};

start();