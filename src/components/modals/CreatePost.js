import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PostModel from "../../models/post";

class CreatePost extends Component {
  state = {
    title: null,
    body: null,
    image: null,
    author: this.props.author,
    city: this.props.city,
    show: false,
    error: null,
    errT: null,
    errB: null,
  };

  // componentDidMount = () => {
  // };

  handleClose = () => {
    this.setState({ 
      title: null,
      body: null,
      image: null,
      author: null,
      city: null,
      show: false,
      error: null,
      errT: null,
      errB: null,
    });
  };

  handleShow = () => {
    this.setState({
      show: true 
    });
    console.log(this.state);;
  };

  handleChange = (event) => {
    let value = (event.target.id === "body") ?
      event.target.value.split("\n") :
      event.target.value;
    this.setState({
      [event.target.id]: value,
    });     
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    PostModel.post(this.state)
      .then((res) => {
        // console.log(res);
        window.location.reload(false);
      })
      .catch((err) => {
        // console.log(err.errors.title);
        this.setState({
          error: err.response.data,
          errB: (err.response.data.errors.body ? err.response.data.errors.body : null),
          errT: (err.response.data.errors.title ? err.response.data.errors.title : null),
        });
        console.log(this.state.error, this.state.errB, this.state.errT);
      });
  };

  render() {

    return (
      <>
        <Button  className="h25" variant="outline-dark" onClick={this.handleShow}>
          Add post
        </Button>

        <Modal
          show={this.state.show}
          size="lg"
          centered
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              controlId="createPost"
              onSubmit={this.handleSubmit}
            >
              <Form.Group controlId="title">
                <Form.Label>Post title:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  isInvalid={this.state.errT ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errT ? this.state.errT.message : null}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="image">
                <Form.Label>Image link:</Form.Label>
                <Form.Control type="text" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="body">
                <Form.Label>Post body:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="10"
                  onChange={this.handleChange}
                  isInvalid={this.state.errB ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errB ? this.state.errB.message : null}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleClose}>
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
      </>
    );
  }
}

export default CreatePost;
