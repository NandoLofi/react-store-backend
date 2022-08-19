require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

const connectDB = async() =>{
    try{
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected")
    } catch (error) {
        console.error("Connectioled Failed")
    }
}

module.exports = connectDB;