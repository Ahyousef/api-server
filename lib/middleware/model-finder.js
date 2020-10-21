'use strict'

const categoriesModel = require('../models/categories/categories-collection')
const productsModel = require('../models/products/products-collection.js')


module.exports = (req,res,next) => {
    const model = req.params.model;
    switch(model){
        case 'products':
            req.model = productsModel;
            break;
        case 'categories':
            req.model = categoriesModel
            break;
        default:
            throw new Error('Invalid model')
    }
    next();
};