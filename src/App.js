import React, { Component } from 'react';
// import { HashRouter } from 'react-router-dom'

import Nav from './components/Nav';
import routes from './routes';
import './App.css';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <Nav/>
        {routes}
      </div>
    ); //return
  }
}

export default App;