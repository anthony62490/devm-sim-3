import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component 
{
  state = {
    unameEntry: '',
    pwordEntry: '',
    imgEntry: ''
  };

  async handleRegister()
  {
    const response = await axios.post('/api/user', {
      uname: this.state.unameEntry,
      pword: this.state.pwordEntry,
      img: this.state.imgEntry
    })
    console.log('response', response.data[0]);
    this.props.history.push('/dashboard');
  }

  render() 
  {
    return (
      <div>
        <input onChange={(e) => this.setState({unameEntry: e.target.value})} value={this.state.unameEntry} placeholder='username'/>
        <input onChange={(e) => this.setState({pwordEntry: e.target.value})} value={this.state.pwordEntry} placeholder='password'/>
        <input onChange={(e) => this.setState({imgEntry: e.target.value})} value={this.state.imgEntry} placeholder='profile pic'/>
        <br/>
        <button>Login</button>
        <button onClick={() => this.handleRegister()}>Register</button>
      </div>
    ); //return
  }
}

export default Auth;