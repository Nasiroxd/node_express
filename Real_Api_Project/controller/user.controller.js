const users = require("../Model/user.model");
const {v4:  uuidv4} = require("uuid");

const getAllUsers = (req,res)=>{
    res.status(200).json({users});
};

const createAllUsers = (req,res)=>{
   const newUser = {
     id: uuidv4(),
     username:  req.body.username,
     email :req.body.email,

   }
   users.push(newUser)
    res.status(201).json(users);
};

const createUpdate = (req,res)=>{
    const userid = req.params.id;
    const {username, email} = req.body;
     users.filter((user) =>user. id == userid).map((selected)=>{
        selected.username = username;
        selected.email = email;
    })
     res.status(200).json(users);
 };

 const createDelect = (req,res)=>{
   const userid = req.params.id;
  const  filterName =  users.filter((user)=> user.id !== userid);
     res.status(202).json( filterName);
 };

module.exports = {getAllUsers, createAllUsers, createUpdate, createDelect};