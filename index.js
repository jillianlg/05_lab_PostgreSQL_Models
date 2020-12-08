require('dotenv').config();
const Candy = require('./lib/models/Candy');


Candy
//   .insert({ type: 'chocolate', description: 'milk chocolate, dark chocolate or white chocolate', url: 'https://url.com' })
  .find()  
//   .findById(2)  
//   .update(2, { type: 'gummies', description: 'worms, bears, juju\s, novelty shapes, creams, sours and more', url: 'https://url.com'})
//   .delete(2)
  .then(console.log);

