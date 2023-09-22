const http = require("http");
const fs = require("fs");
const port = 5000;
const hostName = '127.0.0.1';


const myServer = http.createServer((req,res)=>{

if (req.url === '/') {
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(202, {"Content-Type": "Text/html"});
        res.write(data);
        res.end();

    });
}
    else if (req.url === '/about') {
        fs.readFile("about.html",(err,data)=>{
            res.writeHead(202, {"Content-Type": "Text/html"});
            res.write(data);
            res.end();
        
    });
    

}
});


myServer.listen(port,hostName,()=>{
    console.log(`Server is stated of the http: ${hostName}: ${port}`);

});

