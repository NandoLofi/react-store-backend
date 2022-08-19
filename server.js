require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const connectDB = require('./config/database')
const cors = require('cors')
const Product = require('./models/Product')

app.use(cors())
app.use(express.json());
connectDB();


app.get('/', (req, res)=>{
    res.send("Welcome Home")
})

app.get('/products', (req, res)=>{
    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.error("Found Error")
        res.status(500).json({message: "Server Error"})
    }
})
app.get('/products/:id', (req, res)=> {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.error("Found Error")
        res.status(500).json({message: "Server Error"})
    }
})







app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))