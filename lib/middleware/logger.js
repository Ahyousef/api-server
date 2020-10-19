'use strict'

module.exports = (req,res,next) => {
    console.log(req.date,'__Request__',req.method,req.path,req.requestTime);
    next();
};
