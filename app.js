const express = require("express");
// const about = require("./about");


const app = express();



app.get('/', (req,res)=>{
    res.send("Hi iam get request router");

});

app.post('/', (req,res)=>{
    res.send("Hi iam post request router");

});
app.put('/', (req,res)=>{
    res.send("Hi iam put request router");

});
app.delete('/', (req,res)=>{
    res.send("Hi iam delect request router");

});

// app.listen(port, async ()  =>{
//     console.log(`Server is the running .........http:localhost: ${port}`)
//     await getUsers();
//     about();

// });

module.exports = app;
