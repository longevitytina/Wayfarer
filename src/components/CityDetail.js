import React, { Component } from "react";
import axios from "axios";
import CityPosts from "./CityPosts";
import CreatePost from "./modals/CreatePost";
import CityModel from "../models/city";
import PostModel from "../models/post";
import DivStyle from '../DivStyle';

//link to city that was clicked
//display image, title, description, and all posts

export default class CityDetail extends Component {
  state = {
    city: null,
    posts: null
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevProps.location.pathname);
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getData();
    }
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
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
            city: resCity.data,
            posts: resPosts.data
          });
          console.log(this.state);
        })
      )
      .catch((err) => console.log(err));
  }

  render = () => {
    const { context } = this.props;
    if (this.state.city && this.state.posts) {
      return (
        <div style={DivStyle} >
          <img src={this.state.city.image} alt={this.state.city.name} />
          <div className="d-flex justify-content-between">
            <h3 className="pt-4">{this.state.city.name} Posts</h3>
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
                />
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <p>loading ...</p>
      )
    }
  }
}
