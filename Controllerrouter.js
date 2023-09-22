const express = require("express");

const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({messages: 'Get all contact'});
})

router.route("/").post((req,res)=>{
    res.status(201).json({messages: 'Get all post contact'});
})

router.route("/id").put((req,res)=>{
    res.status(200).json({messages: 'Get all put contact'});
})

router.route("/").delete((req,res)=>{
    res.status(200).json({messages: 'Get all delect contact'});
})

module.exports = router;
