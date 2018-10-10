import React, { Component } from 'react';

class Auth extends Component 
{
  state = {
    unameEntry: '',
    pwordEntry: ''
  };

  render() 
  {
    return (
      <div>
        <input placeholder='username'/>
        <input placeholder='password'/>
        <br/>
        <button>Login</button>
        <button>Register</button>
      </div>
    ); //return
  }
}

export default Auth;