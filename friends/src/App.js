import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <span>
            <NavLink to="/login">Login</NavLink>
          </span>
          <span>
            <NavLink to="/friends">Friends</NavLink>
          </span>
        </nav>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </div>
    );
  }
}

export default App;
