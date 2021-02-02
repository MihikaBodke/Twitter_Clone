import React, { Component } from "react";
import Login from "./Login.js";
import Register from "./Register.js";

export class LoginRegister extends Component {
  state = { allow: true };
  toggleAllow = () => {
    const allow = this.state.allow;
    this.setState({ allow: !allow });
  };
  toggleAllowText = () => {
    return this.state.allow === true ? "New User?" : "Have an account already?";
  };
  handleLogin = (a) => {
    console.log(a);
  };
  render() {
    return (
        <div className="container">
        <div className="jumbotron">
          <button
            onClick={this.toggleAllow}
            className="btn btn-primary"
            style={{ float: "right" }}
          >
            {this.toggleAllowText()}
          </button>
            {this.state.allow === true && (
                <Login onLogin={this.props.onLogin}></Login>
            )}
          {this.state.allow === false && 
            <Register onRegister={this.props.onRegister}></Register>
          }
        </div>
      </div>
    );
  }
}

export default LoginRegister;
