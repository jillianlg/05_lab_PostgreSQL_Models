require('dotenv').config();
const request = require('supertest');
const { app } = require('../index');

describe('tests candy class', () => {
  it('POST and GET chocolate candy with description and link', async() => {
    const response = await request(app)
      .post('/candy')
      .send({ type: 'chocolate', description: 'milk chocolate, dark chocolate or white chocolate', url: 'https://url.com' });

    await expect(response.body).toEqual({
      id: expect.anything(), 
      type: 'chocolate', 
      description: 'milk chocolate, dark chocolate or white chocolate', 
      url: 'https://url.com' });
  });
// I need help with the PUT and  DELETE routes

  // it('PUTs an update for chocolate candy with description and link', async() => {
  //   .put('/candy')
  //   .send({ type: 'gummy', description: 'worms, bears, juju\s, novelty shapes, creams, sours and more', url: 'https://url.com' });

  //   await expect(response.body).toEqual({
  //     id: expect.anything(), 
  //     type: 'gummy', 
  //     description: 'worms, bears, juju\s, novelty shapes, creams, sours and more', 
  //     url: 'https://url.com' });
  // });

  // it('DELETEs chocolate candy with description and link', async() => {
  //   .delete('/candy')
  //   .send({});
  // });
});
