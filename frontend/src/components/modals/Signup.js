import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import UserModel from '../../models/user';

class Signup extends Component {
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
		const { context } = this.props;
    event.preventDefault();
    UserModel.post(this.state)
      .then((res) => {
        // console.log(res.data.data);
        context.actions.setCurrentUser(res.data);
      })
      .catch((err) => {
				console.log(err);
				this.setState({
					error: err.response.data.message,
				});
      });
  };

  render() {
		const { context } = this.props;
    return (
      <Modal
        show={context.showSignupModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // backdrop='static'
        onHide={context.actions.toggleSignupModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
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
                placeholder="Re-enter password"
                required
                onChange={this.handleChange}
                value={this.state.password2}
                isInvalid={!!this.state.error}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={context.actions.toggleSignupModal}
          >
            Close
          </Button>
          <Button variant="outline-dark" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Signup;
