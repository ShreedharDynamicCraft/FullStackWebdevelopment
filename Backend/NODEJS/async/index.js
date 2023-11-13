const fs = require("fs");


// fs.writeFile("read.txt","today is aswesoe day ",(err)=>
// {
//     console.log("files is created");
//     console.log(err);
// });


// we paass them a functiom as an argument -a callback - 
// that getrs called when that task completes
// the call back has an argument that tells you wheter
// the operation completed sucessfully
// Now we neeed t day what to do when fs.weitefile
// has completed (even if tt's nothing ), ans start
// checking for erros

// fs.appendFile("read.txt","plz like ",(err) =>
// {
//     console.log("tast is compelertes")
// });


fs.appendFile("read.txt",'UTF-8,(err) =>
{
    console.log("tast is compelertes")
});
