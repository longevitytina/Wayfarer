import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavTop from "./components/NavTop";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/modals/Login";
import Signup from "./components/modals/Signup";
import PostDetails from "./components/PostDetails";
import EditProfile from "./components/EditProfile";
import CityDetail from "./components/CityDetail";
import EditPost from "./components/EditPost";
import NotFound from "./components/NotFound";

import withContext from "./Context";
import PrivateRoute from "./PrivateRoute";

const NavTopWithContext = withContext(NavTop);
const SidebarWithContext = withContext(Sidebar);
const HomeWithContext = withContext(Home);
const ProfileWithContext = withContext(Profile);
const LoginWithContext = withContext(Login);
const SignupWithContext = withContext(Signup);
const PostDetailsWithContext = withContext(PostDetails);
const EditProfileWithContext = withContext(EditProfile);
const CityDetailWithContext = withContext(CityDetail);
const EditPostWithContext = withContext(EditPost);

export default () => (
  <Router>
    <NavTopWithContext />

    <LoginWithContext />
    <SignupWithContext />
    <div className="wrapper">
      <SidebarWithContext />
      <div className="content p-5 d-flex justify-content-center">
        <Switch>
          <Route exact path="/" component={HomeWithContext} />
          <PrivateRoute exact path="/profile" component={ProfileWithContext} />
          <PrivateRoute
            exact
            path="/profile/edit"
            component={EditProfileWithContext}
          />
          <Route exact path="/profile/:id" component={ProfileWithContext} />
          <Route exact path="/post/:id" component={PostDetailsWithContext} />
          <PrivateRoute exact path="/post/:id/edit" component={EditPostWithContext} />
          <Route exact path="/city/:id" component={CityDetailWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);
