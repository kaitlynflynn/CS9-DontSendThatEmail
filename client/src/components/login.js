import React, { Component } from "react";
import { Card, CardBody, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const setLogin = this.props.context.actions.setLogin;
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("https://dontemail.herokuapp.com/auth/login", user)
      .then(resp => {
        // const user = resp.data.user;

        localStorage.setItem("token", `Bearer ${resp.data.token}`);

        const { setLogin } = this.props.context.actions;
        setLogin(resp.data.user);
        this.props.history.push("/dashboard");
      });
  };
  render() {
    return (
      <div className="form-bg">
        <form className="form animated bounce" onSubmit={this.handleSubmit}>
          <Link to="/">
            <div className="logo" />
          </Link>
          <input
            value={this.state.username}
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="password"
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button type="submit">LOGIN</button>
          <p className="fallback-link">
            {" "}
            No Account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
