require('dotenv').config();
const request = require('supertest');
const { app } = require('../index');

describe('tests candy class', () => {
  it('creates and returns a chocolate candy with description and link', async() => {
    const response = await request(app)
      .post('/candy')
      .send({ type: 'chocolate', description: 'milk chocolate, dark chocolate or white chocolate', url: 'https://url.com' });

    await expect(response.body).toEqual({
      id: expect.anything(), 
      type: 'chocolate', 
      description: 'milk chocolate, dark chocolate or white chocolate', 
      url: 'https://url.com' });
  });
});
