require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const connectDB = require('./config/database')
const productRoute = require('./routes/productRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json());


app.use('/products', productRoute)


connectDB();


app.get('/', (req, res)=>{
    res.send("Welcome Home")
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))