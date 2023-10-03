const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./userRouter/userrouter");


const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user",userRouter);

//home route...
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});

//routing found error....
app.use((req,res,next)=>{
    res.status(404).json({messages: "This is error page!!!"})

});

//home rounting error...
app.use((err,req,res,next)=>{
    res.status(500).json({messages: "something pages..."})

});



module.exports = app;


