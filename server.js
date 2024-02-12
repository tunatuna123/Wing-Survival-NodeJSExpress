const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/blog', (req, res)=> {
    res.send('Hello blog')
})


app.post('/product', async(req,res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})




mongoose.set('strictQuery', false)
mongoose
.connect('mongodb+srv://admin:admin@wingsurvival.udq99yc.mongodb.net/?retryWrites=true&w=majority')
.then(()=> {
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000')
    });
}).catch((error) => {
    console.log('error')
})