const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3001;

const {
  getUsers,
  addUser
  } = require('./controller')
  
  const app = express();
  app.use(json());

massive(process.env.SERVER_CONNECTION_STRING)
  .then(dbInst => app.set('db', dbInst))
  .catch(err => console.log(`Error in massive() - ${err}`));

app.use( express.static( `${__dirname}/../build` ) );

app.get('/api/users', getUsers);
app.post('/api/user', addUser);
// app.put();
// app.delete();

app.listen(port, () => console.log( `Listening for requests on port ${port}` ));