'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Cat get correct model', () => {
    it('can post() a new category', async () => {
        const obj = {
            name: "testtt",
            display_name: "Pants",
            description: "This is a legs clothesware"
        }
        await mockRequest
            .post('/api/v1/categories')
            .send(obj)
            .then((data) => {
                let record = data.body;
                Object.keys(obj).forEach((key) => {
                    expect(record[key]).toEqual(obj[key]);
                });
            });
    });

    it('can get() a product', () => {
        const obj = {
            name: "testtt",
            category:"Categry",
            display_name: "Pants",
            description: "This is a legs clothesware"
        }
        return mockRequest
            .post('/api/v1/products')
            .send(obj)
            .then((data) => {
                return mockRequest.get(`/api/v1/products`).then((record) => {
                    Object.keys(obj).forEach((key) => {
                        expect(record.body.results[0][key]).toEqual(obj[key]);
                    });
                });
            });
    });
});