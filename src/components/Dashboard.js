import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        {this.props.username ? 
        <p>Logged in as: {this.props.username}</p>: 
        <p>Not logged in!</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(Dashboard);