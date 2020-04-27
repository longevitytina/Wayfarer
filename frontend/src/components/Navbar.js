import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import RegisterModal from './RegisterModal';
import Login from './modals/Login';

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand"  to="/">Wayfarer</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
             
              { props.currentUser ? 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={ props.logout }>Logout</a>
                  </li>
                </>
              :
                <>
                  <RegisterModal {...props} />
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                  <Login />
                </>
              }
            </ul>
          </div>
        </div>
        </nav>
    );
}

export default Navbar;
