const express = require("express");
const vue = require("vue");
const app = express();

app.use(express.static(__dirname + '/views'));
app.set("view engine", "html");

app.get('/',(req,res) => {
    res.render("index")
})

app.listen(3000,()=>console.log('server start!'))