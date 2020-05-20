import React, { Component } from "react";
import PostModel from "../models/post";
import moment from "moment";
import { Form } from "react-bootstrap";

class EditPost extends Component {
  state = {
    body: [],
    title: "",
    city: "",
    image: "",
    edited: "",
  };
  componentDidMount() {
    PostModel.getOne(this.props.match.params.id)
      .then((res) => {
        this.setState({
          body: res.data.body,
          title: res.data.title,
          city: res.data.city,
          image: res.data.image ? res.data.image : "",
          edited: res.data.updatedAt,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
      const found = this.props.context.cities.find(
        (city) => city.name === event.target.value
      );
      this.setState({ city: found._id });
    } else {
      this.setState({ city: "" });
    }
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      let data = { ...this.state, _id: this.props.match.params.id };
      PostModel.put(data)
        .then((res) => {
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
                  maxLength="200"
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
                  value={this.state.city ? this.state.city.name : ""}
                >
                  {this.props.context.cities.map((city) => (
                    <option key={city._id}>{city.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="image">
                <Form.Label>Image link:</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
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
              <p>Edited on {moment(this.state.edited).format("LL")}</p>

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
