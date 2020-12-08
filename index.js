require('dotenv').config();
const express = require('express');

const Candy = require('./lib/models/Candy');
const Chocolate = require('./lib/models/Chocolate');
const Gummy = require('./lib/models/Gummy');
const HardCandy = require('./lib/models/HardCandy');
const JellyBeans = require('./lib/models/JellyBeans');

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



Candy
//   .insert({ type: 'chocolate', description: 'milk chocolate, dark chocolate or white chocolate', url: 'https://url.com' })
  .find()  
//   .findById(2)  
//   .update(2, { type: 'gummy', description: 'worms, bears, juju\s, novelty shapes, creams, sours and more', url: 'https://url.com'})
//   .delete(2)
  .then(console.log);


Chocolate
//   .insert({ type: 'milk chocolate', description: 'Nougat, caramel, peanuts en-robed in milk chocolate', name: 'Snickers' })
  .find()  
//   .findById(2)  
//   .update(2, { type: 'dark chocolate', description: 'Dark chocolate covering fresh shredded coconut', name: 'Mounds''})
//   .delete(2)
  .then(console.log);

Gummy
//   .insert({ type: 'gummy', description: 'Chewy red and black gummy centers are covered in sweet nonpareils.', name: 'Haribo Raspberries' })
  .find()  
//   .findById(2)  
//   .update(2, { type: 'juju', description: 'Hot Cinnamon flavored ju ju in the shape of a large, red bear', name: 'Cinnamon JuJu Bear''})
//   .delete(2)
  .then(console.log);

HardCandy
//   .insert({ type: 'Sour', description: 'Sour-lemon-flavored balls wrapped in a sweet coat of sugar and surrounded by a chewy sour lemon shell.', name: 'Lemonhead' })
  .find()  
//   .findById(2)  
//   .update(2, { type: 'Filled', description: 'Strawberry flavored candy filled with  a strawberry filling', name: 'Washburn'\s Strawberry''})
//   .delete(2)
  .then(console.log);

JellyBeans
//   .insert({ type: 'Fruit', description: 'Pear-flavored balls jelly beans made with sweet pear concentrate.', name: 'Juicy Pear' })
  .find()  
//   .findById(2)  
//   .update(2, { type: 'Classic', description: 'Classic licorice flavor', name: 'Licorice'})
//   .delete(2)
  .then(console.log);

app.listen('3001', () => {
  console.log('listening on port 3001');
});

module.exports = { app };
