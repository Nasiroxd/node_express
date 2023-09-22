const express = require("express");
const about = express();


// console.log("Hello word");
// console.log("nasir uddin");

about.get("/",(req,res)=>{
    res.end("Hi iam nasir uddin");
})


module.exports = about;