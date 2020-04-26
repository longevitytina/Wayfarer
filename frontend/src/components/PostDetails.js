import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Button from "react-bootstrap/Button";
import PostModel from "../models/post";

class PostDetails extends Component {
  state = {
    data: [],
    body: [],
    city: {},
    author: {},
  };

  componentWillMount() {
    axios
      .get(`http://localhost:3001/api/v1/posts/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          body: res.data.body,
          city: res.data.city,
          author: res.data.author,
        });
        console.log(res.data);
        console.log(this.state);

        // console.log(this.state.data.city['name']);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }
  handleDelete = (event) => {
    event.preventDefault();
    PostModel.remove(this.props.match.params.id)
      .then((res) => {
        console.log(res);
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };

  // deletePost = (id) => {
  //   axios;
  //   Postmodel.delete(`http://localhost:3001/api/v1/posts/${id}`).then((res) => {
  //     debugger;
  //     let posts = this.state.posts.filter(function (post) {
  //       return post._id !== id;
  //     });
  //     this.setState({ posts });
  //   });
  // };

  deleteClickedPost = () => this.props.onDeletePost(this.props._id);

  render() {
    return (
      <div>
        <p>{this.state.data.title}</p>
        <p>{this.state.city.name}</p>
        <img src={this.state.data.image} alt={this.state.data.title} />
        <p>
          Posted by {this.state.author.name} on{" "}
          {moment(this.state.data.createdAt).format("LL")}
        </p>
        {this.state.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <Button
          variant="outline-dark"
          className="delete"
          onClick={this.handleDelete}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default PostDetails;
