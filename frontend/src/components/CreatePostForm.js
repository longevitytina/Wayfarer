import React, { Component } from "react";
import PostModel from "../models/post";
import { Form, Button } from "react-bootstrap";

class CreatePostFormInner extends Component {
  state = {
    title: "",
    body: [],
    image: "",
    author: "",
    city: "",
  };

  componentDidMount() {
    this.setState({
      author: this.props.author,
      city: this.props.city,
    });
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
    PostModel.create(this.state)
      .then((res) => {
				// console.log(res);
				window.location.reload(false);
      })
			.catch((err) => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Post title:</Form.Label>
          <Form.Control type="text" onChange={this.handleChange} />
        </Form.Group>
				<Form.Group controlId="image">
          <Form.Label>Image link:</Form.Label>
          <Form.Control type="text" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Post body:</Form.Label>
          <Form.Control as="textarea" rows="10" onChange={this.handleChange} />
        </Form.Group>
				<Button variant="primary" type="submit" className="mr-2">
					Submit
				</Button>
				<Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
      </Form>
    );
  }
}

export default CreatePostFormInner;
