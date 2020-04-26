import React, { Component } from "react";
import UserModel from "../models/user";
import axios from "axios";
import CityModel from '../models/city';
import ModalProfile from './ModalProfile';

class EditProfile extends Component {
  state = {
    name: this.props.name,
    city: "",
		email: this.props.email,
    cities: [],
  };

  componentDidMount() {
		CityModel.get()
      .then((res) => {
        this.setState({
					cities: res.data,
					city: this.props.city._id
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelect = (event) => {
    if (event.target.value) {
      const found = this.state.cities.find(
        (city) => city.name === event.target.value
      );
      // console.log(event.target.value);
      // console.log(found._id);
      this.setState({ city: found._id });
    } else {
      this.setState({ city: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    UserModel.update(this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push("/profile");
      })
      .catch((err) => console.log(err));
	};

  render() {
    return (
      <ModalProfile
        {...this.state.user}
        handleChange={this.handleChange}
        cities={this.state.cities}
        handleSubmit={this.handleSubmit}
        handleSelect={this.handleSelect}
      />
    );
  }
}

export default EditProfile;
