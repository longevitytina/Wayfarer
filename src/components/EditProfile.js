import React, { Component } from "react";
import UserModel from "../models/user";
import axios from "axios";
import { Form, Button, Row, Col } from 'react-bootstrap';

class EditProfile extends Component {
  state = {
    name: "",
    city: "",
    user: "",
    email: ""
  };

  componentDidMount() {
    const { context } = this.props;
    UserModel.getOne(context.currentUser)
      .then((res) => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          user: res.data._id,
          email: res.data.email
        })
        console.log(context.cities);
      })
        .catch((error) => console.log("Error fetching and parsing data", error));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSelect = (event) => {
    const { context } = this.props;
    if (event.target.value) {
      const found = context.cities.find(
        (city) => city.name === event.target.value
      );
      console.log(event.target.value);
      console.log(found._id);
      this.setState({ city: found._id });
    } else {
      this.setState({ city: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    UserModel.put(this.state)
      .then((res) => {
        // this.setState({
        //   name: "",
        //   // city: '',
        //   user: "",
        // });
        console.log(res);
        this.props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { context } = this.props;
    return (

      <Form>
        <Form.Group as={Row} controlId="email" onSubmit={this.handleSubmit}>
          <Form.Label column sm="4">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={this.state.email} />
          </Col>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder={this.state.name} onChange={this.handleChange} />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control as="select" onChange={this.handleSelect}>
            <option></option>
            {context.cities.map((city) => (
              <option key={city._id}>{city.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button
            variant="outline-secondary"
            onClick={this.props.history.goBack}
          >
            Back
          </Button>
          <Button variant="outline-dark" onClick={this.handleSubmit}>
            Submit
          </Button>
      </Form>
    );
  }
}

export default EditProfile;
