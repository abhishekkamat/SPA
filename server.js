const express=require("express");
const { Server } = require("http");
const PORT = 3000;
const path=require("path");

const app=express();

app.use("/static", express.static(path.resolve(__dirname,"frontend","static")));

app.get("/*", (req,res)=>{
    res.sendFile(path.resolve("frontend","index.html"));
});

app.listen(PORT,()=> console.log("Server Running at port"));