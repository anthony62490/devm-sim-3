import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { saveUserInfo } from '../redux/reducer';

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
    this.props.saveUserInfo(response.data[0]);
    this.props.history.push('/dashboard');
  }

  async handleLogin()
  {
    const response = await axios.post('/api/auth/login', {
      uname: this.state.unameEntry,
      pword: this.state.pwordEntry
    })
    this.props.saveUserInfo(response.data[0]);
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
        <button onClick={() => this.handleLogin()}>Login</button>
        <button onClick={() => this.handleRegister()}>Register</button>
      </div>
    ); //return
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { saveUserInfo })(Auth);