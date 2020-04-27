import React, { Component } from 'react';
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
    this.setState({ currentUser: userId });
    localStorage.setItem("uid", userId);
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
    localStorage.removeItem("uid");
    UserModel.logout()
      .then((res) => {
        console.log(res);
        this.setState({ currentUser: null });
        this.props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };


  render() {
    const { currentUser, currentCity, cities, showLoginModal, showSignupModal } = this.state;
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
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
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
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

