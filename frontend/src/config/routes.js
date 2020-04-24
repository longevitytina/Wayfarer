import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Register from "../components/Register";
import PostDetails from "../components/PostDetails";

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/profile"
      render={(routeProps) => {
        return <Profile {...routeProps} currentUser={props.currentUser} />;
      }}
    />
    <Route
      path="/login"
      render={(routeProps) => {
        // An example of adding props to a component rendered by react router
        return (
          <Login
            {...routeProps}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
        );
      }}
    />
    <Route path="/register" component={Register} />
    <Route path="/post/:id" component={PostDetails} />
    <Route path="/profile/edit" component={EditProfile} />
  </Switch>
);