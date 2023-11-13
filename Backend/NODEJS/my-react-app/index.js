const fs = require("fs");


// create a new file


// fs.writeFileSync("read.txt", " welcome to my channel");


// fs.writeFileSync("read.txt", " Shreedhar welcome to my channel");




// fs.appendFileSync("read.txt","how are you brother");


// const buf_data=fs.readFileSync("read.txt");
// console.log(buf_data);


// NOde.js includes an additional data type called buffer;

// (not availablw in browser's javascript);

// buffer is mainly used to store binarry data.

// while reading from file or receiving packlets over the network

/* <Buffer 20 53 68 72 65 65 64 68 61 72 20 77 65 6c 63 6f 6d 65 20 7
4 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 68 6f 77 20 61 72 65 20 79 
6f 75 20 62 72 6f 74 68 65 ... 1 more byte> */



// const buf_data=fs.readFileSync("read.txt");

// org_data=buf_data.toString();
// console.log(org_data);


// to rename the file

// fs.renameSync("read.txt", "readwrite.txt");





