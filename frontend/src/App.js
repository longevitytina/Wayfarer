import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import PostDetails from "./components/PostDetails";
import EditProfile from "./components/EditProfile";
import CityDetail from "./components/CityDetail";
import EditPost from "./components/EditPost";
import NotFound from "./components/NotFound";

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

const NavbarWithContext = withContext(Navbar);
const SidebarWithContext = withContext(Sidebar);
const ProfileWithContext = withContext(Profile);
const LoginWithContext = withContext(Login);
const RegisterWithContext = withContext(Register);
const PostDetailsWithContext = withContext(PostDetails);
const EditProfileWithContext = withContext(EditProfile);
const CityDetailWithContext = withContext(CityDetail);
const EditPostWithContext = withContext(EditPost);

export default () => (
  <Router>
    <div>
      <NavbarWithContext />
      <SidebarWithContext />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginWithContext} />
        <Route path="/signup" component={RegisterWithContext} />
        <PrivateRoute exact path="/profile" component={ProfileWithContext} />
        <PrivateRoute path="/profile/edit" component={EditProfileWithContext} />
        <Route exact path="/post/:id" component={PostDetailsWithContext} />
        <Route path="/post/:id/edit" component={EditPostWithContext} />
        <Route path="/city/:id" component={CityDetailWithContext} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
