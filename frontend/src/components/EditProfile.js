import React, { Component } from 'react'
import UserModel from '../models/user'

class EditProfile extends Component {
  state = {
    name: "",
		city: "",
		user: ""
	}

	componentDidMount() {
		this.setState({
			name: this.props.location.state.name,
			city: this.props.location.state.city,
			user: this.props.currentUser,
		})
	}

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    UserModel.update(this.state)
      .then(res => {
        this.setState({
          name: '',
					city: '',
					user: ''
				})
				console.log(res);
        this.props.history.push('/profile')
      })
      .catch(err => console.log(err))
	}
	
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">EditProfile</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    onChange={this.handleChange} 
                    className="form-control form-control-lg" 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.name}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="name">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
              </div> */}
              <div className="form-group">
                <label htmlFor="name">City</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="city" id="city" name="city" value={this.state.city} />
              </div>
              {/* <div className="form-group">
                <label htmlFor="name">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              </div> */}
              {/* <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
              </div> */}
              <button className="btn btn-primary float-right" type="submit">EditProfile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
