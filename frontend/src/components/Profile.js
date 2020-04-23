import React, { Component } from 'react';
import axios from 'axios';

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
    let results;
    if(this.state.posts){
      results = this.state.posts.map((post) => {
        return (
          <p key={post.id}>{post.title}</p>
        )
      })
    }
    return (
      <> 
        <h1>Profile</h1>
        {results}
      </>
    );
  }
}
 
export default Profile;