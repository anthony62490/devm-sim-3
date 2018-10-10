import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function handleLogout()
{
  axios.post('/api/auth/logout')
  .then(response => console.log('LogOut response', response))
  .catch(err => console.log('error in handleLogout():', err));
}

function Nav(props)
{
  return (
    <div>
      <Link to='/dashboard'><button>
        Home
      </button></Link>
      <Link to='/new'><button>
        New Post
      </button></Link>
      <Link to='/'><button onClick={handleLogout}>
        Logout
      </button></Link>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(Nav);