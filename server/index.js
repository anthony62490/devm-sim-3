const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = 3001;

// const {
  // } = require('./controller')
  
  const app = express();
  app.use(json());

massive(process.env.SERVER_CONNECTION_STRING)
  .then(dbInst => app.set('db', dbInst))
  .catch(err => console.log(`Error in massive() - ${err}`));

// app.get();
// app.post();
// app.put();
// app.delete();

app.listen(port, () => console.log( `Listening for requests on port ${port}` ));