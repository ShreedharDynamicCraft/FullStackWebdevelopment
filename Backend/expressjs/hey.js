const express = require("express");



const app = express();



app.get("/",(req,res) => {
 
res.send("hello worls");
} );


app.get("/about",(req,res)=>
{
    res.send("hello world from about page");
})


app.listen(8000,()=>{
    console.log("listing the port at 5000");

});


