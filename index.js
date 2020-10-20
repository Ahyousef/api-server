const server = require('./lib/server.js');
const dotenv = require('dotenv')
const PORT = (process.env.PORT || 3030);
const mongoose = require('mongoose');

const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/api-server';

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        server.start(PORT);
    })
    .catch((err) => console.error(err.message));