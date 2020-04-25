import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./config/routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserModel from "./models/user";
import "./index.css";

class App extends Component {
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
    return (
      <>
        <Navbar currentUser={this.state.currentUser} logout={this.logout} />
        <div className="container-fluid ">
          <div className="row">
            {this.props.location.pathname !== "/" && <Sidebar />}
            <main role="main" className="col-md-9 ml-sm-auto p-5 ">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                <Routes
                  currentUser={this.state.currentUser}
                  setCurrentUser={this.setCurrentUser}
                />
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(App);
