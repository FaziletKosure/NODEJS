const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const mongoose = require('mongoose');


// const mongodb='mongodb+srv://<username>:<password>@cluster0.lwnah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log('Mongodb connected')
app.listen(8080)}).catch(err=>console.log(err))


// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html',{root:__dirname})
// })

app.get('/',(req,res)=>{
    const items =[
        { name:'mobile phone', price:1000  },
        { name:'book', price:30  },
        { name:'computer', price:2000  }
    ]
    res.render('index',{items})
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