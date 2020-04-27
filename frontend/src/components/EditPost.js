import React, { Component } from "react";
import PostModel from "../models/post";
import moment from "moment";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class EditPost extends Component {
  state = {
    stuffForTheDb: {
      data: [],
      body: [],
      title: "",
      city: "",
      cities: [],
      author: {},
    },
    stuffForBootstrap: {
      validated: false,
      setValidated: false,
    },
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v1/posts/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          stuffForTheDb: {
            ...this.state.stuffForTheDb,
            data: res.data,
            body: res.data.body,
            title: res.data.title,
            city: res.data.city,
            author: res.data.author,
          },
        });
        console.log(res.data);
        console.log(this.state.stuffForTheDb);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));

    axios
      .get("http://localhost:3001/api/v1/cities")
      .then((res) => {
        this.setState({
          stuffForTheDb: {
            // not a top lvl property, so need to assign previous state, so it will not be
            // overwritten with setState(). Adds property cities to state.
            ...this.state.stuffForTheDb,
            cities: res.data,
          },
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
    this.setState({
      stuffForTheDb: {
        ...this.state.stuffForTheDb,
        [event.target.name]: stateValue,
      },
    });
  };

  handleSelect = (event) => {
    if (event.target.value) {
      const found = this.state.stuffForTheDb.cities.find(
        (city) => city.name === event.target.value
      );

      // console.log(found._id);
      this.setState({
        stuffForTheDb: { ...this.state.stuffForTheDb, city: found._id },
      });
    } else {
      this.setState({
        stuffForTheDb: { ...this.state.stuffForTheDb, city: "" },
      });
    }
  };

  handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);
    event.preventDefault();
    PostModel.update(this.state.stuffForTheDb)
      .then((res) => {
        console.log(res);
        this.props.history.goBack();
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state);
    const body = this.state.stuffForTheDb.body.join("\n");

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-3">Edit Post</h4>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Post title:</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="text"
                  id="name"
                  name="title"
                  value={this.state.stuffForTheDb.title}
                />
              </Form.Group>
              <Form.Group controlId="exampleFormControlSelect1">
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={this.handleSelect}
                  className="form-control"
                  id="exampleFormControlSelect1"
                  as="select"
                >
                  {console.log("message", this.state.stuffForTheDb) ||
                    this.state.stuffForTheDb.cities.map((city) => (
                      <option key={city._id}>{city.name}</option>
                    ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="name"
                  name="body"
                  rows="20"
                  value={body}
                  as="textarea"
                />
              </Form.Group>
              <p>
                Edited on{" "}
                {moment(this.state.stuffForTheDb.data.updatedAt).format("LL")}
              </p>

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
