import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Post from './components/Post';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <Nav/>
        <Form/>
        <Post/>
        <Dashboard/>
        <Auth/>
      </div>
    ); //return
  }
}

export default App;