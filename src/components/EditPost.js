import React, { Component } from "react";
import PostModel from "../models/post";
import moment from "moment";
import axios from "axios";
import { Form } from "react-bootstrap";

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
      .get(
        `${process.env.REACT_APP_API_URL}/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          data: res.data,
          body: res.data.body,
          title: res.data.title,
          city: res.data.city,

          // cities: res.data,
          author: res.data.author,
        });
      })
      .catch((error) => console.log("Error fetching and parsing data", error));

    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`)
      .then((res) => {
        this.setState({ cities: res.data });
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
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      PostModel.put(this.state)
        .then((res) => {
          // console.log(res);
          this.props.history.goBack();
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const body = this.state.body.join("\n");
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-3">Edit Post</h4>
            <Form noValidate validated onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Post title:</Form.Label>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="text"
                  name="title"
                  maxlength="200"
                  value={this.state.title}
                />
                <Form.Control.Feedback type="invalid">
                  Please write something, max 200 characters
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="exampleFormControlSelect1">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  onChange={this.handleSelect}
                  className="form-control"
                  as="select"
                >
                  {this.state.cities.map((city) => (
                    <option key={city._id}>{city.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  required
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  name="body"
                  rows="20"
                  value={body}
                  as="textarea"
                />
                <Form.Control.Feedback type="invalid">
                  Please write something!
                </Form.Control.Feedback>
              </Form.Group>
              <p>Edited on {moment(this.state.data.updatedAt).format("LL")}</p>

              <button className="btn btn-outline-dark" type="submit">
                Save
              </button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPost;
