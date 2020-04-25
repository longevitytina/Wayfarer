import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import moment from 'moment';
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    posts: [],
    user: {},
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v1/posts?author=${this.props.currentUser}`)
      .then((res) => {this.setState({posts: res.data});
        console.log(res.data);
      })
      .catch(error => console.log("Error fetching and parsing data", error));
      axios
      .get(`http://localhost:3001/api/v1/users/${this.props.currentUser}`)
      .then((res) => {this.setState({user: res.data});
        console.log(res.data);
      })
      .catch(error => console.log("Error fetching and parsing data", error));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Profile</h1>
          { this.state.user.name && <p>Name: {this.state.user.name}</p>}
          { this.state.user.city && <p>City: {this.state.user.city.name}</p>}
          <p>Member since: {moment(this.state.user.createdAt).format('LL')}</p>
          <Link to={{
            pathname: '/profile/edit',
            state: {...this.state.user}
          }}><h4>Edit profile</h4></Link>      
        </div>
        <h3>My Posts</h3>
        <div className="allPosts">
          {this.state.posts.map(post => (
            <Post {...post} key={post._id} />
					))}
        </div>
      </div>
    ) 
  }
}

export default Profile;