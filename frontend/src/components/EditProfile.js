import React, { Component } from 'react'
import UserModel from '../models/user'
import axios from "axios"

class EditProfile extends Component {
  state = {
    name: "",
		city: "",
		user: "",
		cities: []
	}

	componentDidMount() {
		axios
      .get("http://localhost:3001/api/v1/cities")
      .then((res) => {this.setState({
				name: this.props.location.state.name,
				user: this.props.currentUser,
				cities: res.data,
			});
        // console.log(res.data);
      })
      .catch(error => console.log("Error fetching and parsing data", error));
	}

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
	}
	
	handleSelect = (event) => {
		if (event.target.value) {
			const found = this.state.cities.find(city => city.name === event.target.value);
		// console.log(event.target.value);
		// console.log(found._id);
		this.setState({city: found._id})
		} else {
			this.setState({city: ""})
		}
	}

  handleSubmit = (event) => {
    event.preventDefault()
    UserModel.update(this.state)
      .then(res => {
        this.setState({
          name: '',
					// city: '',
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

							<div className="form-group">
								<label htmlFor="exampleFormControlSelect1">City</label>
								<select onChange={this.handleSelect} className="form-control" id="exampleFormControlSelect1">
										<option key="null"></option>
									{this.state.cities.map(city => (
										<option key={city._id}>{city.name}</option>
									))}
								</select>
							</div>

              <button className="btn btn-primary float-right" type="submit">EditProfile</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
