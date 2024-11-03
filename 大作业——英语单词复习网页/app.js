const express = require("express");
const app = express();

app.use(require("cors")());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("./static"))

app.use('/user',require("./router/user.js"))

app.listen("5000",()=>{
    console.log("开放在5000端口")
})
