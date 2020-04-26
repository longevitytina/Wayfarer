import React, { Component } from "react";
import axios from "axios";
import CityPosts from "./CityPosts";
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

  componentWillMount() {
    axios
      .get(`http://localhost:3001/api/v1/cities/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          name: res.data.name,
          country: res.data.country,
          image: res.data.image,
        });

        console.log(this.state.name);
        console.log(this.state.country);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
    axios
      .get(
        `http://localhost:3001/api/v1/posts?city=${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(res.data);
        console.log(typeof res.data);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }

  render() {
    console.log(this.state.posts[0] ? this.state.posts[0].title : null);

    return (
      <div>
        <img src={this.state.image} alt={""} />
        <h3 className="pt-4">
          {this.state.name}, {this.state.country}
        </h3>

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
