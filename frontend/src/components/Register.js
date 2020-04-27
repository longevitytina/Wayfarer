import React, { Component } from "react";
import UserModel from "../models/user";
import { Form } from "react-bootstrap";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    error: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      error: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    UserModel.create(this.state)
      .then((res) => {
        console.log(res.data);
        this.props.setCurrentUser(res.data);
        this.props.history.push("/profile");
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        if (err.status) {
          this.setState({
            error: err.response.data.message,
          });
        }
      });
  };

  render() {
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={this.handleChange}
            value={this.state.email}
            isInvalid={!!this.state.error}
          />
          <Form.Control.Feedback type="invalid">
            {this.state.error}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={this.handleChange}
            value={this.state.password}
            isInvalid={!!this.state.error}
          />
        </Form.Group>
        <Form.Group controlId="password2">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={this.handleChange}
            value={this.state.password2}
            isInvalid={!!this.state.error}
          />
        </Form.Group>
        <button type="submit" className="btn btn-outline-dark mr-2">
          Submit
        </button>
        <button type="submit" className="btn btn-outline-secondary" onClick={this.props.handleClose}>
          Close
        </button>
      </Form>
    );
  }
}
export default Register;
