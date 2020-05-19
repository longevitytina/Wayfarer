import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import UserModel from "../../models/user";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    error: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      error: "",
    });
  };

  handleSubmit = (event) => {
    const { context } = this.props;
    event.preventDefault();
    // console.log(event);
    UserModel.login(this.state)
      .then((res) => {
        // console.log(res.data.data);
        context.actions.setCurrentUser(res.data.data);
        this.props.history.push("/profile");
      })
      .catch((err) => {
        if (err.status) {
          this.setState({
            error: err.response.data.message,
          });
        }
      });
    // console.log(this.props);
  };

  componentWillUnmount = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { context } = this.props;
    return (
      <Modal
        show={context.showLoginModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={context.actions.toggleLoginModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Control.Feedback type="invalid">
                {this.state.error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={context.actions.toggleLoginModal}
          >
            Close
          </Button>
          <Button
            variant="outline-dark"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default withRouter(Login);
