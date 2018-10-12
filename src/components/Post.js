import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component 
{
  state =
  {
    postId: null,
    username: '',
    postImg: '',
    postTitle: '',
    postBody: ''
  }

  componentDidMount()
  {
    axios.get(`/api/post?id=${this.props.match.params.postid}`)
    .then(response => this.setState({
      postId: response.data[0].id,
      username: response.data[0].username,
      postImg: response.data[0].img,
      postTitle: response.data[0].title,
      postBody: response.data[0].content,
      })
    )
    .catch(err => console.log('err', err));
  }

  render() 
  {
    return (
      <div>
        <h3>{this.state.postId}</h3>
        <h3>{this.state.username}</h3>
        <img src={this.state.postImg}/>
        <h3>{this.state.postTitle}</h3>
        <h3>{this.state.postBody}</h3>
      </div>
    );
  }
}

export default Post;