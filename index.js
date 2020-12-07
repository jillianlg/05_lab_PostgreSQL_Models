require('dotenv').config();
const Candy = require('./lib/models/Candy');


Candy
//   .insert({ type: 'chocolate', description: 'milk chocolate, dark chocolate or white chocolate', url: 'https://url.com' })
  .find()  
  .then(console.log);

