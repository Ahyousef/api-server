'use strict'

const supergoose = require('@code-fellows/supergoose');
const product = require('../lib/models/products/products-collection');



describe('Products Collection', () => {
    it('can create() a new product', () => {
        const obj = {
            name: "testtt",
            category: "categ",
            display_name: "Pants",
            description: "This is a legs clothesware"
        }
        return product.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                })
            })
    })

    it('can get()', () => {
        return product.read().then((record) => {
            record != null
        })
    })
})