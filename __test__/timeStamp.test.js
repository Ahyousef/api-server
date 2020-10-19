const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {
  it('should add timeStamp to req', async () => {
    await mockRequest.get('/time').then((results) => {
      expect(results.text).toBe("19/10/2020");
    });
  });
});