const http = require("http");
const fs = require("fs");

const MyServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url) {
        case "/": 
            res.end("HomePage");
            break;
        case "/about": 
            res.end("I am Yogesh Mishra");
            break;
        default:
            res.end("404 Not Found");
            }
    // res.end("Hello From Server");
}); 
});

MyServer.listen(8000, () => console.log("Server Started"));
