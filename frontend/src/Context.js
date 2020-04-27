import React, { Component } from 'react';
import UserModel from "./models/user";

const Context = React.createContext(); 

export class Provider extends Component {

	state = {
    currentUser: localStorage.getItem("uid"),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem("uid", userId);
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
    const { currentUser } = this.state;
    const value = {
      currentUser,
      actions: {
        setCurrentUser: this.setCurrentUser,
        logout: this.logout
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

