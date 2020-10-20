'use strict'

// Setup and global Middleware
const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const timeStampMiddleware = require('./middleware/timestamp.js');
const loggerMiddleware = require('./middleware/logger.js');
const productsRouter = require('./routes/products.js');
const categoriesRoutes = require('./routes/categories.js');


// Initialize
app.use(express.json());
app.use(timeStampMiddleware);
app.use(loggerMiddleware)
app.use('/api/v1/products',productsRouter);
app.use('/api/v1/categories',categoriesRoutes);



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