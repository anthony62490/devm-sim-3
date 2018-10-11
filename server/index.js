require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const session = require('express-session');

const port = process.env.SERVER_PORT || 3001;
let { SERVER_PORT, SESSION_SECRET } = process.env;

const {
  getUsers,
  addUser,
  loginUser,
  logoutUser,
  addPost
  } = require('./controller')
  
const app = express();
app.use(json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(process.env.SERVER_CONNECTION_STRING)
  .then(dbInst => app.set('db', dbInst))
  .catch(err => console.log(`Error in massive() - ${err}`));

app.use( express.static( `${__dirname}/../build` ) );

app.get('/api/users', getUsers);
app.post('/api/user', addUser);
app.post('/api/auth/login', loginUser)
app.post('/api/auth/logout', logoutUser)
app.post('/api/post', addPost)
// app.put();
// app.delete();

app.listen(port, () => console.log( `Listening for requests on port ${port}` ));