'use strict';

const express = require('express');
const categoriesRouter = express.Router();
const categoriesCollection = require('../models/categories/categories-collection')



const getCategoriesHandler = function (req, res, next) {
    categoriesCollection
        .read()
        .then((data) => {
            const count = data.length;
            const results = data;
            res.status(200).json({ count, results })
        })
        .catch()
}

const getOneCategoryHandler = function (req, res) {
    const id = req.params.id;
    categoriesCollection
        .read(id)
        .then((data) => res.status(200).json(data));
}

const postCategoriesHandler = function (req, res) {
    const record = req.body
    categoriesCollection
        .create(record)
        .then((data) => res.status(201).json(record))
}

const updateCategoriesHandler = function (req, res) {
    const id = req.params.id;

    const record = req.body
    categoriesCollection
        .update(id, record)
        .then((data) => res.status(201).json(data))

}

const deleteCategoriesHandler = function (req, res) {
    const id = req.params.id;

    categoriesCollection
    .delete(id)
    .then((data)=> res.status(200).json(data));
    
    res.json(deletedRecord);
}


categoriesRouter.get('/', getCategoriesHandler)
categoriesRouter.get('/:id', getOneCategoryHandler)
categoriesRouter.post('/', postCategoriesHandler)
categoriesRouter.put('/:id', updateCategoriesHandler)
categoriesRouter.delete('/:id', deleteCategoriesHandler)


module.exports = categoriesRouter;
