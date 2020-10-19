'use strict'

// Setup and global Middleware
const express = require('express')
const app = express();
const timeStampMiddleware = require('./middleware/timestamp.js');
const loggerMiddleware = require('./middleware/logger.js');



// Initialize
app.use(express.json());
app.use(timeStampMiddleware);
app.use(loggerMiddleware)
let categDB = []; //in-memory db
let productDB = []; //in-memory db


// General Routes

app.get('/', (req, res) => {
    res.send('Hello from the server');
});
app.get('/test', (req, res) => {
    console.log('test');
})
app.get('/time', (req, res) => {
    res.send(req.requestTime)
})


// Category Routes 
app.post('/api/v1/categories', (req, res) => {
    const name = req.body.name;
    const display_name = req.body.display_name;
    const description = req.body.description;
    const record = { name, display_name, description }
    record.id = categDB.length + 1;
    categDB.push(record)
    res.status(201).json(record)
})

app.get('/api/v1/categories', (req, res) => {
    const count = categDB.length;
    const results = categDB;
    res.json({ count, results })
})
app.get('/api/v1/categories/:id', (req, res) => {
    const id = req.params.id;
    const records = categDB.filter((record) => record.id === parseInt(id));
    res.json(records[0]);
})
app.put('/api/v1/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const name = req.body.name;
    const display_name = req.body.display_name;
    const description = req.body.description;
    const newRecord = { name, display_name, description }
    newRecord.id = id;

    for (let i = 0; i < categDB.length; i++) {
        if (categDB[i].id == id) {
            categDB[i] = newRecord
            break;
        }
    }
    res.json(newRecord);

})
app.delete('/api/v1/categories/:id', (req, res) => {
    const id = req.params.id;
    const records = categDB.filter((record) => record.id !== parseInt(id));
    const deletedRecord = categDB.filter((record) => record.id === parseInt(id));
    res.json(deletedRecord);
    categDB = records
})


// Products Routes 
app.post('/api/v1/products', (req, res) => {
    const name = req.body.name;
    const category = req.body.category
    const display_name = req.body.display_name;
    const description = req.body.description;
    const record = { name, category, display_name, description }
    record.id = productDB.length + 1;
    productDB.push(record)
    res.status(201).json(record)
})

app.get('/api/v1/products', (req, res) => {
    const count = productDB.length;
    const results = productDB;
    res.json({ count, results })
})
app.get('/api/v1/products/:id', (req, res) => {
    const id = req.params.id;
    const records = productDB.filter((record) => record.id === parseInt(id));
    res.json(records[0]);
})
// app.get('/api/v1/products/:category', (req, res) => {
//     const category = req.params.category;
//     const records = productDB.filter((record) => record.category === category);
//     let count = record.length
//     res.json({ count, results })
// })
app.put('/api/v1/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const name = req.body.name;
    const category = req.body.category
    const display_name = req.body.display_name;
    const description = req.body.description;
    const newRecord = { name, category, display_name, description }
    newRecord.id = id;

    for (let i = 0; i < productDB.length; i++) {
        if (productDB[i].id == id) {
            productDB[i] = newRecord
            break;
        }
    }
    res.json(newRecord);

})
app.delete('/api/v1/products/:id', (req, res) => {
    const id = req.params.id;
    const records = productDB.filter((record) => record.id !== parseInt(id));
    const deletedRecord = productDB.filter((record) => record.id === parseInt(id));
    res.json(deletedRecord);
    productDB = records
})


// Error Middleware
const pageNotFoundMiddleware = require('./middleware/404.js');
const serverErrorMiddleware = require('./middleware/500.js');


// Error routes
app.get('/bad', serverErrorMiddleware);
app.use('*', pageNotFoundMiddleware);
app.use(serverErrorMiddleware);



// export
module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`);
        });
    },
};