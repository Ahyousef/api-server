const server = require('./lib/server.js');
const dotenv = require('dotenv')
const PORT = (process.env.PORT || 3030);
server.start(PORT);