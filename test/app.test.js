const request = require('supertest')
const app = require('../src/index')

describe('App should run on port 3000', () => {
    test('It should respond to GET request', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
})


describe('App should run on port 3000', () => {
    test('It should fail to GET request', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(402);
    })
})