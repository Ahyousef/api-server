'use strict';

const express = require('express')
const productsRouter = express.Router();
const ProductsCollection = require('../models/products/products-collection.js')



const getProductsHandler = function (req, res, next) {
    ProductsCollection
        .read()
        .then((data) => {
            const count = data.length;
            const results = data;
            res.status(200).json({ count, results })
        })
        .catch()
}

const getOneProductHandler = function (req, res) {
    const id = req.params.id;
    ProductsCollection
        .read(id)
        .then((data) => res.status(200).json(data));
}

const postProductsHandler = function (req, res) {
    const record = req.body
    ProductsCollection
        .create(record)
        .then((data) => res.status(201).json(record))
}

const updateProductsHandler = function (req, res) {
    const id = req.params.id;
    const record = req.body
    ProductsCollection
        .update(id, record)
        .then((data) => res.status(201).json(record))

}

const deleteProductsHandler = function (req, res) {
    const id = req.params.id;

    ProductsCollection
    .delete(id)
    .then((data)=> res.status(200).json(data))
    .catch((error) => console.error(error))
    }

productsRouter.get('/', getProductsHandler)
productsRouter.get('/:id', getOneProductHandler)
productsRouter.post('/', postProductsHandler)
productsRouter.put('/:id', updateProductsHandler)
productsRouter.delete('/:id', deleteProductsHandler)



module.exports = productsRouter;
