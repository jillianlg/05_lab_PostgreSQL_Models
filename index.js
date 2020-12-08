require('dotenv').config();
const express = require('express');

const Candy = require('./lib/models/Candy');
const Chocolate = require('./lib/models/Chocolate');

const app = express();
app.use(express.json());

app.post('/candy', async(req, res) => {
  const candy = await Candy.insert(req.body);
  res.send(candy);
});

app.get('/candy', async(req, res) => {
  Candy
    .find()
    .then(candy => res.send(candy));
});



// Candy
//   .insert({ type: 'chocolate', description: 'milk chocolate, dark chocolate or white chocolate', url: 'https://url.com' })
//   .find()  
//   .findById(2)  
//   .update(2, { type: 'gummies', description: 'worms, bears, juju\s, novelty shapes, creams, sours and more', url: 'https://url.com'})
//   .delete(2)
//   .then(console.log);


// Chocolate
//   .insert({ type: 'milk chocolate', description: 'nougat, caramel, peanuts en-robed in milk chocolate', name: 'Snickers' })
//   .find()  
//   .findById(2)  
//   .update(2, { type: 'dark chocolate', description: ' dark chocolate covering fresh shredded coconut', name: 'Mounds''})
//   .delete(2)
//   .then(console.log);

  

app.listen('3001', () => {
  console.log('listening on port 3001');
});

module.exports = { app };
