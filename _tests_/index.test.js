const request = require('supertest');
const app = require('../lib/app');
const pool = require('../lib/utils/pool');
const fs = require('fs');
const Candy = require('../lib/models/candy');

describe('tests candy class', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('POST candy with description and link', async() => {
    const response = await request(app)
      .post('/candy')
      .send({ 
        type: 'chocolate', 
        description: 'milk chocolate, dark chocolate or white chocolate', 
        url: 'https://url.com' 
      });

    await expect(response.body).toEqual({
      id: expect.anything(), 
      type: 'chocolate', 
      description: 'milk chocolate, dark chocolate or white chocolate', 
      url: 'https://url.com' });
  });

  it('GETs candy by id', async() => {
    const candy = await Candy.insert({
      type: 'chocolate', 
      description: 'milk chocolate, dark chocolate or white chocolate', 
      url: 'https://url.com' 
    });

    const response = await request(app)
      .get(`/candy/${candy.id}`);
    
    expect(response.body).toEqual(candy);
  });

  // it('finds a candy by id via GET', async() => {
  //   const candy = await Candy.insert({
  //     type: 'chocolate', 
  //     description: 'milk chocolate, dark chocolate or white chocolate', 
  //     url: 'https://url.com'
  //   });

  //   const res = await request(app)
  //     .get(`/api/v1/candy/${candy.id}`);

  //   expect(res.body).toEqual(candy);
  // });

  it('GETs all candy', async() => {
    const candy = await Promise.all([
      {
        type: 'chocolate', 
        description: 'milk chocolate', 
        url: 'https://url.com'
      },
      {
        type: 'chocolate', 
        description: 'dark chocolate', 
        url: 'https://url.com'
      },
      {
        type: 'chocolate', 
        description: 'white chocolate', 
        url: 'https://url.com'
      }
    ].map(candy => Candy.insert(candy)));

    const res = await request(app)
      .get('/candy/');
    
    expect(res.body).toEqual(expect.arrayContaining(candy));
    // expect(res.body).toHaveLength(candy.length);
  });

  // it('PUTs an update to candy by id', async() => {
  //   const response = await request(app)
  //     .put('/candy/1')
  //     .send({
  //       type: 'chocolate', 
  //       description: 'milk chocolate or dark chocolate', 
  //       url: 'https://url.com' 
  //     });

  //   expect(response.body).toEqual({
  //     type: 'chocolate', 
  //     description: 'milk chocolate or dark chocolate', 
  //     url: 'https://url.com'
  //   });
  // });

  // it('DELETES candy by id', async() => { 
  //   const response = await request(app)
  //     .delete('candy/1');

  //   expect(response.body).toEqual('candy/1');
  // });

});
