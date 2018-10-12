import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPostsByUser } from '../redux/reducer';

class Dashboard extends Component 
{
  componentDidMount()
  {
    if(this.props.id)
    {
      this.props.getPostsByUser(this.props.id);
    }
  }

  render() 
  {
    let postMap;
    if(this.props.userPosts)
    {
      postMap = this.props.userPosts.map((e,i) => 
      {
        return (
          <Link to={`/post/${e.id}`}>
            <h3>Go to Post #{e.id}</h3>
          </Link>
        );
      });
    }

    return (
      <div>
        Dashboard
        {this.props.username ? 
        <p>Logged in as: {this.props.username}</p>: 
        <p>Not logged in!</p>}
        {postMap}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getPostsByUser })(Dashboard);