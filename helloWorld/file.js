const fs = require("fs");

//sync...
// fs.writeFileSync("./test.txt", "Hey There");

//async...
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

console.log(fs.statSync("./test.txt").isFile());

// there are lot of functions in fs => can see by typing fs.

fs.mkdir("my-docs"); // creates a director/folder 
// we can't do this type of file handling in normal js due to secuirty purposes this is the faeture of NodeJs i.e. File Handling