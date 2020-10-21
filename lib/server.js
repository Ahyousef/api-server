'use strict'

// Setup and global Middleware
const express = require('express')
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/api-v1.js')
const timeStampMiddleware = require('./middleware/timestamp.js');
const loggerMiddleware = require('./middleware/logger.js');




// Initialize
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
app.use(timeStampMiddleware);
app.use(loggerMiddleware)
app.use('/api/v1',apiRouter)
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