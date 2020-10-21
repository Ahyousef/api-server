'use strict'

const productsModel = require('./products-schema')
const Collection = require('../mongo.js');


class CategoriesCollection extends Collection {
  constructor() {
    super(productsModel)
   }
}

module.exports = new CategoriesCollection();