const express = require('express')
const app = express()

app.listen(8080)

app.get('/',(req,res)=>{
    res.send('<p>Home page</p>')
})

app.get('/add-item',(req,res)=>{
    res.send('<h2>Add Items</h2>')
})