const http =require("http");

const server=http.createServer((req,res)
{
    res.end("hello from yhr others sides");

} );


server.listen(8000,"27.0.0.1",()=>{
console.log("listening to the port no 8000");
} 
);
