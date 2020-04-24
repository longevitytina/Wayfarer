import React, { Component } from 'react';
import axios from 'axios';
import PostContainer from './PostContainer';

class Profile extends Component {
  state = { 
    posts: [],
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/api/v1/posts?author=${this.props.currentUser}`)
      .then(res => {
        this.setState({
          posts: res.data,
        })
        console.log(res.data);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() { 
    return (
      <> 
        <h1>Profile</h1>
        <PostContainer posts={this.state.posts} />
      </>
    );
  }
}
 
export default Profile;