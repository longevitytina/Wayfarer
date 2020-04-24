import React, { Component } from 'react'
import UserModel from '../models/user'

class EditProfile extends Component {
  state = {
    name: this.props.state.name,
		city: this.props.state.city,
		user: this.props.state.user
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // make an axios call to the API EditProfile route
    UserModel.update(this.state)
      .then(res => {
        this.setState({
          name: '',
					city: '',
					user: ''
        })
        this.props.history.push('/profile')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
			<h1>Edit profile HERE</h1>
      // <div className="container mt-4">
      //   <div className="row">
      //     <div className="col-md-4 offset-md-4">
      //       <h4 className="mb-3">EditProfile</h4>
      //       <form onSubmit={this.handleSubmit}>
      //         <div className="form-group">
      //           <label htmlFor="name">Name</label>
      //           <input 
      //               onChange={this.handleChange} 
      //               className="form-control form-control-lg" 
      //               type="text" 
      //               id="name" 
      //               name="name" 
      //               value={this.state.name}
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="name">Email</label>
      //           <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="name">City</label>
      //           <input onChange={this.handleChange} className="form-control form-control-lg" type="city" id="city" name="city" value={this.state.city} />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="name">Password</label>
      //           <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
      //         </div>
      //         <div className="form-group">
      //           <label htmlFor="password2">Confirm Password</label>
      //           <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
      //         </div>
      //         <button className="btn btn-primary float-right" type="submit">EditProfile</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default EditProfile;
