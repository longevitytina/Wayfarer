import React, { Component } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
  state = { 
    cities: []
  }
  componentWillMount(){
    axios
      .get("http://localhost:3001/api/v1/cities")
      .then((res) => {
        this.setState({
          cities: res.data,
        });
        console.log(this.state);
      })
      .catch((error) => console.log("Error fetching and parsing data", error));
  }

  render() { 
    return ( 
      <nav className="col-md-3 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            Cities
          </h6>

          <ul className="nav flex-column mb-2">
            {this.state.cities.map(city => (
              <li key={city._id} className="nav-item">
                <NavLink
                  to={"/city/" + city._id}
                  className="nav-link"
                  activeClassName="selectedLink">
                  {city.name}
                </NavLink>
              </li>
            ))}
          </ul>

        </div>
      </nav>
     );
  }
}
 
export default Sidebar;