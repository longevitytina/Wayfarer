import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import moment from "moment";
import { Link } from "react-router-dom";
import DivStyle from '../DivStyle';

import UserModel from "../models/user";
import PostModel from "../models/post";

class Profile extends Component {
  state = {
    posts: null,
    user: null,
  };

  componentDidMount() {
    const { context } = this.props;
    let userId = this.props.match.params.id ? this.props.match.params.id : context.currentUser;
    axios
      .all([
        UserModel.getOne(userId),
        PostModel.getByAuthor(userId),
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
      // console.log(context);
  }

  render() {
    const { context } = this.props;
    if (this.state.posts && this.state.user) {
      return (
        <div style={DivStyle} >
          <div className="row">
            <div className="col-sm p-3">
              <h2>Profile</h2>
              {this.state.user.name && <p>Name: {this.state.user.name}</p>}
              {this.state.user.city && <p>City: {this.state.user.city.name}, {this.state.user.city.country}</p>}
              <p>
                Member since: {moment(this.state.user.createdAt).format("LL")}
              </p>

              {context.currentUser === this.state.user._id ? (
                <Link
                  className="link"
                  to={{
                    pathname: "/profile/edit",
                    state: { ...this.state.user },
                  }}
                >
                  <button type="button" className="btn btn-outline-dark">
                    Edit profile
                  </button>
                </Link>
              ) : null}
            </div>
            <hr />
            <div className="col-sm p-3">
              <h2 className="p-3">Posts</h2>
              <div className="allPosts">
                <ul className="list-unstyled">
                  {this.state.posts.map((post) => (
                    <Post {...post} key={post._id} city={context.cities.find(city => city._id === post.city)} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>loading...</p>
    }
  }
}

export default Profile;