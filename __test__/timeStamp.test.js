const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

var currentDate = new Date();

var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var dateString = day + "/" + (month + 1) + "/" + year;


describe('api server', () => {
  it('should add timeStamp to req', async () => {
    await mockRequest.get('/time').then((results) => {
      expect(results.text).toBe("dateString");
    });
  });
});
