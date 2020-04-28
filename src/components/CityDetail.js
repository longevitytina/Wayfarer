import React, { Component } from "react";
import axios from "axios";
import CityPosts from "./CityPosts";
import CreatePost from "./modals/CreatePost";
import CityModel from "../models/city";
import PostModel from "../models/post";

//link to city that was clicked
//display image, title, description, and all posts

export default class CityDetail extends Component {
  state = {
    name: "",
    country: "",
    image: "",
    posts: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.location.pathname);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.reRender();
    }
  }

  componentDidMount() {
    this.reRender();
  }

  reRender(){
    axios
      .all([
        CityModel.getOne(this.props.match.params.id),
        PostModel.getByCity(this.props.match.params.id),
      ])
      .then(
        axios.spread((resCity, resPosts) => {
          // console.log(resCity.data);
          // console.log(resPosts.data);
          this.setState({
            posts: resPosts.data,
            name: resCity.data.name,
            country: resCity.data.country,
            image: resCity.data.image,
          });
          console.log(this.state);
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { context } = this.props;
    return (
      <div className="mt-5">
        <img src={this.state.image} alt={""} />

        <div className="d-flex justify-content-between">
          <h3 className="pt-4">{this.state.name} Posts</h3>
          {context.currentUser ? (
            <CreatePost
              city={this.props.match.params.id}
              author={context.currentUser}
            />
          ) : null}
        </div>
        <div className="allPosts">
          <ul className="list-unstyled">
            {this.state.posts.map((post) => (
              <CityPosts
                {...post}
                key={post._id}
                onDeletePost={this.deletePost}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
