const express = require("express");
const app2 = express();
const http = require('http');
const { listen } = require('./app');
const about = require('./about');


// about();

// http.createServer((req,res)=>{



// }).listen(3000);
app2.listen(3000,()=>{
    console.log("server is started : 3000");
    about();
})

// module.exports = app2;
module.exports = app2;
   


   

