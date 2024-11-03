const express = require("express");
const router = express.Router();

router.post("/login",(req,res)=>{
    res.send({code:0});
})

module.exports = router;