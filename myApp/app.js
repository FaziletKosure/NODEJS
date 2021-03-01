const express = require('express')
const app = express()
app.set('view engine', 'ejs');
const Item=require('./models/items')
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}))

// const mongodb='mongodb+srv://<username>:<password>@cluster0.lwnah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log('Mongodb connected')
app.listen(8080)}).catch(err=>console.log(err))


// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html',{root:__dirname})
// })

// app.get('/create-item',(req,res)=>{
//     const item=new Item({
//         name:'computer',
//         price:2000
//     })

//     item.save().then(result=>res.send(result))
// })

// app.get('/get-items',(req,res)=>{

//     Item.find().then(result=>res.send(result)).catch(err=>console.log(err))
// })

// app.get('/get-item',(req,res)=>{

//     Item.findById('603a3c81852b238f489b1318').then(result=>res.send(result)).catch(err=>console.log(err))
// })

// app.get('/',(req,res)=>{
//     const items =[
//         { name:'mobile phone', price:1000  },
//         { name:'book', price:30  },
//         { name:'computer', price:2000  }
//     ]
//     res.render('index',{items})
// })

// app.get('/add-item',(req,res)=>{
//     res.sendFile('./views/add-item.html',{root:__dirname})
// })


app.get('/', (req, res) => {
    res.redirect('/get-items');
})

app.get('/get-items', (req, res) => {

    Item.find().then(result => {

        res.render('index', { items: result });
    }).catch(err => console.log(err))
})

app.get('/add-item',(req,res)=>{
    res.render('add-item')
})

app.post('/items',(req,res)=>{

    console.log(req.body);
    const item=Item(req.body)
    item.save().then(()=>{
        res.redirect('/get-items')
    }).catch(err=>console.log(err))

})

app.get('/items/:id',(req,res)=>{
    // console.log(req.params);
    const id=req.params.id
    Item.findById(id).then(result=>{
        console.log(result);
        res.render('item-detail',{item:result})
    })
})

app.delete('/items/:id',(req,res)=>{
    // console.log(req.params);
    const id=req.params.id
    Item.findByIdAndDelete(id).then(result=>{
        res.json({redirect:'/get-items'})
     
    })
})

app.put('/items/:id',(req,res)=>{
    // console.log(req.params);
    const id=req.params.id
    Item.findByIdAndUpdate(id,req.body).then(result=>{
        res.json({msg:'Updated Successfully'})
     
    })
})

// app.use((req,res)=>{
//     res.sendFile('./views/error.html',{root:__dirname})
// })
app.use((req,res)=>{
    res.render('error')
})