const Product =  require('../models/Product')

const allProduct = async (req, res) =>{
    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.error("Found Error")
        res.status(500).json({message: "Server Error"})
    }
}
const productById = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.error("Found Error")
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {
    allProduct,
    productById
}