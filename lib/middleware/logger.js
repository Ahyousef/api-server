'use strict'

module.exports = (req,res,next) => {
    console.log('__Request__',req.method,req.path,req.requestTime);
    next();
};
