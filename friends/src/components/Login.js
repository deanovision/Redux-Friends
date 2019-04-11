import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }
  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };
  render() {
    console.log(this.state.credentials);
    return (
      <div>
        <h2>Login to View Friends</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder=" username..."
            value={this.state.credentials.username}
            name="username"
            onChange={this.onChange}
          />
          <br />
          <input
            type="password"
            placeholder=" password..."
            value={this.state.credentials.password}
            name="password"
            onChange={this.onChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
