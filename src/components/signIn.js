import React, { Component } from "react";
import "../App.css";

class SignIn extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create an Account</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="firstName">
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  className=""
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="lastName">
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  className=""
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="email">
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  className=""
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="password">
              <label htmlFor="password">Password </label>
              <input
                type="text"
                className=""
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
