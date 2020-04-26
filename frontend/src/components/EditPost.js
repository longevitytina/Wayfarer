import React, { Component } from "react";
import PostModel from "../models/post";
import moment from "moment";
import axios from "axios";

class EditPost extends Component {
  state = {
    data: [],
    body: [],
    title: "",
    city: "",
    cities: [],
    author: {},
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v1/posts/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          body: res.data.body,
          title: res.data.title,
          city: res.data.city,

          // cities: res.data,
          author: res.data.author,
        });
        console.log(res.data);
        console.log(this.state);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));

    axios
      .get("http://localhost:3001/api/v1/cities")
      .then((res) => {
        this.setState({
          cities: res.data,
        });
        console.log(res.data);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }

  handleChange = (event) => {
    let stateValue = event.target.value;
    if (event.target.name === "body") {
      stateValue = event.target.value.split("\n");
    }
    this.setState({ [event.target.name]: stateValue });
  };

  handleSelect = (event) => {
    if (event.target.value) {
      const found = this.state.cities.find(
        (city) => city.name === event.target.value
      );

      // console.log(found._id);
      this.setState({ city: found._id });
    } else {
      this.setState({ city: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    PostModel.update(this.state)
      .then((res) => {
        console.log(res);
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const body = this.state.body.join("\n");

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Edit Post</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="text"
                  id="name"
                  name="title"
                  value={this.state.title}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">City</label>
                <select
                  onChange={this.handleSelect}
                  className="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option key="null"></option>
                  {this.state.cities.map((city) => (
                    <option key={city._id}>{city.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="paragraph_text"
                  id="name"
                  name="body"
                  rows="20"
                  value={body}
                ></textarea>
              </div>
              <p>
                Updated by {this.state.author.name} on{" "}
                {moment(this.state.data.updatedAt).format("LL")}
              </p>

              <button className="btn btn-outline-dark" type="submit">
                Edit Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPost;
