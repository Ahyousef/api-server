const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {
    it('should respond with 404 on a page not found', async () => {
        await mockRequest.get('/random').then((results) => {
            expect(results.status).toBe(404);
        });
    });
});