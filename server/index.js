const express = require("express");
const sio=require("socket.io")

const app=express()
var server = require('http').createServer(app);
const socket = sio.listen(server)

socket.on("connection",(socket)=>{
  console.log("客户端建立链接")
  socket.send("你好")
  socket.on("meg",msg=>{
    console.log("接受到一个消息",msg)
  })
  socket.on("disconnect",()=>{
    console.log("客户端断开链接")
  })
})


server.listen(3001);
