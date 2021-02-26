const express = require('express')
const app = express()

app.listen(8080)

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/add-item',(req,res)=>{
    res.sendFile('./views/add-item.html',{root:__dirname})
})

app.use((req,res)=>{
    res.sendFile('./views/error.html',{root:__dirname})
})