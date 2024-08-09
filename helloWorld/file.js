const fs = require("fs");
const os = require("os");

//sync...blocking request
// fs.writeFileSync("./test.txt", "Hey There");

//async...Non - Blocking Request
// fs.writeFile("./test.txt", "Hello World Async", (err)=> {} );

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err,result) => {
//     if (err){
//         console.log("Error", err);
//     } else {
//         console.log(result);  
//     }
// });

// console.log(fs.statSync("./test.txt"))

// console.log(fs.statSync("./test.txt").isFile());

// // there are lot of functions in fs => can see by typing fs.

// fs.mkdir("my-docs"); // creates a director/folder 
// // we can't do this type of file handling in normal js due to secuirty purposes this is the faeture of NodeJs i.e. File Handling

// default thread pool size = 4
//Max? = 8core cpu - 8

console.log(os.cpus().length);