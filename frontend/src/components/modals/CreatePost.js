import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PostModel from "../../models/post";

class CreatePostModal extends Component {
  state = { 
    title: "",
    body: [],
    image: "",
    author: "",
    city: "",
    show: false,
    error: "",
  }
  componentDidMount = () => {
    this.setState({
      author: this.props.author,
      city: this.props.city,
    });
  }
  handleClose = () => {
    this.setState({show: false});
  }
  handleShow = () => {
    this.setState({show: true});
  }
  handleChange = (event) => {
		if (event.target.id==="body") {
			this.setState({
				[event.target.id]: event.target.value.split('\n'),
			});
		} else {
			this.setState({
				[event.target.id]: event.target.value,
			});
		}
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
				console.log(err.response.data);
				this.setState({
					error: err.response.data.message,
				});
      });
  };
  render() { 
    return ( 
      <>
        <Button variant="outline-dark" onClick={this.handleShow}>
          Add post
        </Button>

        <Modal show={this.state.show} size="lg" centered onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new post</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form noValidate controlId="createPost" onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Post title:</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} isInvalid={!!this.state.error} />
              <Form.Control.Feedback type="invalid">
                {this.state.error}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image link:</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Post body:</Form.Label>
              <Form.Control as="textarea" rows="10" onChange={this.handleChange} isInvalid={!!this.state.error} />
              <Form.Control.Feedback type="invalid">
                {this.state.error}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="outline-dark" type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
 
export default CreatePostModal;