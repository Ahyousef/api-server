'use strict'

var currentDate = new Date();

var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var dateString = day + "/" + (month + 1) + "/" + year;


module.exports = (req, res, next) => {
    // console.log('hello');
    req.requestTime = dateString;
    // console.log(req.requestTime);
    next(); // VERY IMPORTANT
}