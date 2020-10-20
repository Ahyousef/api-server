'use strict'
const supergoose = require('@code-fellows/supergoose');
const category = require('../lib/models/categories/categories-collection');



describe('Categories Collection', () => {
    it('can create() a new category',async () => {
        const obj = {
            name: "testtt",
            display_name:"Pants",
            description:"This is a legs clothesware"
        }
        
        const test = await category.create(obj);
            Object.values(obj).forEach((val)=>{
                expect(test[val]).toEqual(obj[val])
            })
    })
    it('can get()',()=>{
        return category.read().then((record) => {
            record != null
        })
    })
})