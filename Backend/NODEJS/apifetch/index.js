// const http = require("http");
// // const gfName=require("./featurs")
// // Import the gfName variable from featurs.js using ES6 import
// import gfName from "./featurs.js";


// const http = require("http");
// const gfName = require("./featurs.js");
import http from "http"
import gfName from "./featurs.js";

console.log(gfName);


const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === "/about") {
        res.end("<h1>Hello, World!</h1>"); // You should also send a response to the client.
    } else if (req.url === "/") {
        res.end("<h1>Home Page</h1>"); // You should also send a response to the client.
    } else if (req.url === "/contact") {
        res.end("<h1>Contact Page</h1>"); // You should also send a response to the client.
    } else {
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is working on port 3000"); // Corrected port number
});
