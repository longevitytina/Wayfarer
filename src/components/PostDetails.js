import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Button from "react-bootstrap/Button";
import PostModel from "../models/post";
import { Link } from "react-router-dom";
import ConfirmDelete from "./modals/ConfirmDelete";

class PostDetails extends Component {
  state = {
    data: [],
    body: [],
    city: {},
    author: {},
  };

  componentDidMount() {
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
    PostModel.delete(this.props.match.params.id)
      .then((res) => {
        console.log(res);
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };

  shouldRenderEditedOn() {
    const createdAt = moment(this.state.data.createdAt);
    const updatedAt = moment(this.state.data.updatedAt);
    return updatedAt.diff(createdAt, "minutes") > 0;
  }

  deleteClickedPost = () => this.props.onDeletePost(this.props._id);

  render() {
    const { context } = this.props;
    console.log(context.currentUser);
    //console.log(this.state.author._id);
    return (
      <div>
        <p>{this.state.data.title}</p>
        <p>{this.state.city.name}</p>
        <img src={this.state.data.image} alt={this.state.data.title} />
        <p>
          {console.log(this.state)}
          Posted by {this.state.author.name} on{" "}
          {moment(this.state.data.createdAt).format("LL")}
        </p>
        {this.state.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {this.shouldRenderEditedOn()
          ? `Edited on ${moment(this.state.data.updatedAt).format("LL")}`
          : ""}
        {context.currentUser == this.state.author._id ? (
          <>
            <ConfirmDelete
              post={this.state.data.title}
              delete={this.handleDelete}
            />
            <Link
              className="link"
              to={{
                pathname: `/post/${this.props.match.params.id}/edit`,
                state: { ...this.state.user },
              }}
            >
              <button type="button" class="btn btn-outline-dark">
                Update Post
              </button>
            </Link>
          </>
        ) : null}
      </div>
    );
  }
}

export default PostDetails;
