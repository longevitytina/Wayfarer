import React, { Component } from "react";
import UserModel from "./models/user";
import CityModel from "./models/city";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    currentUser: localStorage.getItem("uid"),
    cities: [],
    currentCity: "",
    showLoginModal: false,
    showSignupModal: false,
  };

  componentDidMount() {
    CityModel.getAll()
      .then((res) => {
        this.setState({
          cities: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  setCurrentUser = (userId) => {
    // console.log(userId);
    localStorage.setItem("uid", userId);
    // console.log(localStorage.getItem("uid"));
    this.setState({
      currentUser: userId,
      showLoginModal: false,
      showSignupModal: false,
    });
    // console.log(this.state.currentUser);
  };

  setCurrentCity = (cityId) => {
    this.setState({ currentCity: cityId });
  };

  toggleLoginModal = () => {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  };

  toggleSignupModal = () => {
    this.setState({ showSignupModal: !this.state.showSignupModal });
  };

  logout = (event) => {
    event.preventDefault();
    UserModel.logout()
      .then((res) => {
        // console.log(res);
        localStorage.removeItem("uid");
        this.setState({ currentUser: null });
      })
      .catch((err) => {
        // console.log(err);
        localStorage.removeItem("uid");
        this.setState({ currentUser: null });
      });
  };

  render() {
    const {
      currentUser,
      currentCity,
      cities,
      showLoginModal,
      showSignupModal,
    } = this.state;
    const value = {
      currentUser,
      currentCity,
      cities,
      showLoginModal,
      showSignupModal,
      actions: {
        setCurrentUser: this.setCurrentUser,
        setCurrentCity: this.setCurrentCity,
        logout: this.logout,
        toggleLoginModal: this.toggleLoginModal,
        toggleSignupModal: this.toggleSignupModal,
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
