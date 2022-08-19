const express = require('express')
const router = express.Router()
const { allProduct, productById } = require('../controller/product')


//index route
router.get('/', allProduct);

//show route(per id)
router.get('/:id', productById );

module.exports = router