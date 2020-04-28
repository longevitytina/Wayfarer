import React, { Component } from "react";
import PostModel from "../models/post";
import { Link } from "react-router-dom";
import ConfirmDelete from "./modals/ConfirmDelete";
import Moment from "react-moment";

class PostDetails extends Component {
  state = {
    data: null,
    city: null,
    author: null,
  };

  componentDidMount() {
    PostModel.getOne(this.props.match.params.id)
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data,
          author: res.data.author,
          city: res.data.city,
        });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
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

  render() {
    const { context } = this.props;
    // console.log(context.currentUser);
    if (this.state.data && this.state.city && this.state.author) {
      return (
        <div className="py-5">
          <img
            className="float-right ml-5 mb-3"
            src={this.state.data.image}
            alt={this.state.data.title}
          />
          <h2>{this.state.data.title}</h2>
          <h5>
            {this.state.city.name}, {this.state.city.country}
          </h5>
          <div className="my-3">
            <sub>
              Posted by{" "}
              <Link
                className="link"
                to={{
                  pathname: `/profile/${this.state.author._id}`,
                }}
              >
                {this.state.author.name ? this.state.author.name : "anon"}
              </Link>{" "}
              on &nbsp;
              <Moment local format="LL">
                {this.state.data.createdAt}
              </Moment>
              <br />
              Updated <Moment fromNow>{this.state.data.updatedAt}</Moment>
            </sub>
          </div>
          <div>
            {this.state.data.body.map((txt, i) => (
              <p key={i}>{txt}</p>
            ))}
          </div>

          {context.currentUser === this.state.data.author._id ? (
            <div className="mt-5">
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
                <button type="button" className="btn btn-outline-dark ml-2">
                  Edit
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      );
    } else {
      return <p>Loading!</p>;
    }
  }
}

export default PostDetails;
