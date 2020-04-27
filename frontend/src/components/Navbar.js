import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({context}) => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand"  to="/">Wayfarer</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
              { context.currentUser ? 
                
                <>
                
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={ context.actions.logout }>Logout</a>
                  </li>
                </>
              :
                <>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" onClick={context.actions.toggleLoginModal}>Log In</button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" onClick={context.actions.toggleSignupModal}>Sign Up</button>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
        </nav>
    );
}

export default Navbar;
