import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import moment from "moment";
import { Link } from "react-router-dom";

import UserModel from "../models/user";
import PostModel from "../models/post";

class Profile extends Component {
  state = {
    posts: [],
    user: {},
  };

  componentDidMount() {
    const { context } = this.props;
    axios
      .all([
        UserModel.getOne(context.currentUser),
        PostModel.getByAuthor(context.currentUser),
      ])
      .then(
        axios.spread((resUser, resPosts) => {
          console.log(resUser.data);
          console.log(resPosts.data);
          this.setState({
            posts: resPosts.data,
            user: resUser.data,
          });
        })
      )
      .catch((err) => console.log(err));
      console.log(context);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Profile</h1>
          {this.state.user.name && <p>Name: {this.state.user.name}</p>}
          {this.state.user.city && <p>City: {this.state.user.city.name}</p>}
          <p>Member since: {moment(this.state.user.createdAt).format("LL")}</p>
          <Link
            className="link"
            to={{
              pathname: "/profile/edit",
              state: { ...this.state.user },
            }}
          >
            <button type="button" class="btn btn-outline-dark">
              Edit profile
            </button>
          </Link>
        </div>
        <h3>My Posts</h3>
        <div className="allPosts">
          {this.state.posts.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;
