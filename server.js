const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT
const cors = require('cors')
const Product = require('./models/Product')
const mongoose = require('mongoose');
const DATA_BASE_URI = process.env.MONGO_URI



app.use(cors())
app.use(express.json());

mongoose.connect(DATA_BASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection
.on('open', ()=> console.log('MongoDB connected'))
.on('close', ()=> console.log('MongoDB disconnected'))
.on('error', ()=> console.log("Error"))








app.get('/', (req, res)=>{
    res.send("Welcome Home")
})

app.get('/products', async (req, res)=> {
    try {
        res.json(await Product.find({}))
        console.log("This is the home page")
    } catch (error) {
        res.status(400).json(error)
    }
})

app.get('/products/:id', async (req, res)=> {
    try {
        res.json(await Product.findById(req.params.id))
    } catch (error) {
        console.error("Found Error")
        res.status(500).json({message: "Server Error"})
    }
})




console.log(typeof(DATA_BASE_URI))
app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))