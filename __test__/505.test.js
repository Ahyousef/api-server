const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {
    it('should respond with 500 on a server Error', async () => {
        await mockRequest.get('/bad').then((results) => {
            expect(results.status).toBe(500);
        });
    });
});