import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserInfo } from '../redux/reducer';

class Nav extends Component
{
  componentDidMount()
  {
    this.props.getUserInfo();
  }

  handleLogout()
  {
    axios.post('/api/auth/logout')
    .then(response => console.log('LogOut response', response))
    .catch(err => console.log('error in handleLogout():', err));
  }

  render()
  {
    return (
      <div>
        <Link to='/dashboard'><button>
          Home
        </button></Link>
        <Link to='/new'><button>
          New Post
        </button></Link>
        <Link to='/'><button onClick={this.handleLogout}>
          Logout
        </button></Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUserInfo })(Nav);