'use strict'

const express = require('express');
const router = express.Router();
const getModel = require('../middleware/model-finder.js')

router.param('model',getModel)

router.get('/:model',handleGetAll)
router.get('/:model/:id',getOneHandler)
router.post('/:model',createHandler)
router.put('/:model/:id', updateHandler)
router.delete('/:model/:id', deleteHandler) 


function handleGetAll(req, res, next) {
    req.model
        .read()
        .then((data) => {
            const count = data.length;
            const results = data;
            res.status(200).json({ count, results })
        })
        .catch()
}

function getOneHandler (req, res, next) {
    const id = req.params.id;
    req.model
        .read(id)
        .then((data) => res.status(200).json(data));
}

function createHandler(req, res, next) {
    const record = req.body
    req.model
        .create(record)
        .then((data) => res.status(201).json(record))
}

function updateHandler(req, res, next) {
    const id = req.params.id;
    const record = req.body
    req.model
        .update(id, record)
        .then((data) => res.status(201).json(data))

}

function deleteHandler(req, res, next) {
    const id = req.params.id;

    req.model
    .delete(id)
    .then((data)=> res.status(200).json(data));
    }


module.exports = router;