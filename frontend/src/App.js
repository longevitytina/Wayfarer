import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Navbar from './components/Navbar'
import UserModel from './models/user'

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid')
  }

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  logout = (event) => {
    event.preventDefault();

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        this.setState({ currentUser: null })
        this.props.history.push('/login')
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <>
        <Navbar 
          currentUser={this.state.currentUser} 
          logout={this.logout}   
        />
        <div className="container">
          <Routes 
            currentUser={this.state.currentUser} 
            setCurrentUser={this.setCurrentUser} 
          />
        </div>
      </>
    )
  }
}

export default withRouter(App);
