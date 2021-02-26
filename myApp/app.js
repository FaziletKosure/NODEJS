const express = require('express')
const app = express()
app.set('view engine', 'ejs');

app.listen(8080)

// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html',{root:__dirname})
// })

app.get('/',(req,res)=>{
    res.render('index')
})

// app.get('/add-item',(req,res)=>{
//     res.sendFile('./views/add-item.html',{root:__dirname})
// })

app.get('/add-item',(req,res)=>{
    res.render('add-item')
})

// app.use((req,res)=>{
//     res.sendFile('./views/error.html',{root:__dirname})
// })
app.use((req,res)=>{
    res.render('error')
})