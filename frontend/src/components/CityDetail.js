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
    // if (prevState.name !== this.state.name) {
    //   this.reRender();
    // }
    // if (this.props.location.pathname !== prevProps.location.pathname)
    console.log(prevProps.location.pathname);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.reRender();
    }
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }
  // render() {
  //   console.log('render');
  // }
 
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
    // console.log(this.state.posts[0] ? this.state.posts[0].title : null);

    return (
      <div>
        <img src={this.state.image} alt={""} />
        
        <div className="d-flex justify-content-between">
          <h3 className="pt-4">{this.state.name} Posts</h3>
          <CreatePost city={this.props.match.params.id} author={this.props.currentUser} />
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
