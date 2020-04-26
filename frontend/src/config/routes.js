import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import PostDetails from "../components/PostDetails";
import EditProfile from "../components/EditProfile";
import CityDetail from "../components/CityDetail";
import EditPost from "../components/EditPost";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/profile"
      render={(routeProps) => {
        return <Profile {...routeProps} currentUser={props.currentUser} />;
      }}
    />
    <Route
      path="/login"
      render={(routeProps) => {
        return (
          <Login
            {...routeProps}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
        );
      }}
    />
    <Route
      path="/register"
      render={(routeProps) => {
        return (
          <Register
            {...routeProps}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
        );
      }}
    />
    <Route
      exact
      path="/post/:id/edit"
      component={EditPost}
      render={(routeProps) => {
        return <EditPost {...routeProps} currentUser={props.currentUser} />;
      }}
    />
    <Route path="/post/:id" component={PostDetails} />
    <Route 
      path="/city/:id" 
      render={(routeProps) => {
        return <CityDetail {...routeProps} currentUser={props.currentUser}/>;
      }}
    />
    <Route
      path="/profile/edit"
      render={(routeProps) => {
        return <EditProfile {...routeProps} currentUser={props.currentUser} />;
      }}
    />
  </Switch>
);
