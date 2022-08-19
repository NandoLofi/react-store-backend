require('dotenv').config();
const productsData = require('./data/products')
const connectDB = require('./config/database')
const productModel = require('./models/Product')

connectDB();

const importMerch = async ()=> {
    try {
        await productModel.deleteMany({});

        await productModel.insertMany(productsData)

        console.log("Data Imported");

        process.exit()
    } catch (error){
        console.error("Erro on data")
        process.exit(1);
    }
}

importMerch();
