/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import mainlogo from "../Img/main_logo.png";
import { Link } from "react-router-dom";
function Login(props) {
  return (
    <div className="Login">
      <div className="Sidebar">
        <img src={mainlogo} alt="mainlogo" />
      </div>
      <div className="Login-layout">
        <div className="form">
          <h4>Welcome to Techno</h4>
          <h2>Login to your Account</h2>
          <div className="login-input">
            <div className="input">
              <label htmlFor="username">Email / Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder=" John123 /John123@gmail.com "
                className="input-text"
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Secret password"
                className="input-pass"
              />
            </div>
          </div>
          <div className="input-bottom">
            <div className="start">
              <input
                type="checkbox"
                className="input-check"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a className="a-link" href="#">
              Forgot Password
            </a>
          </div>
          <div className="box">
            <button className="input-btn" onClick={props.loginCheck}>
              {/* Login */}
              <Link to="/Main" className="Link-btn">
                Login
              </Link>
            </button>
            <span>or</span>
            <button className="register-btn">
              <Link to="/Register" className="Link-hyper">
                Register
              </Link>
              {/* Register */}
            </button>
          </div>
        </div>
        <footer className="login-footer ">
          <p>Copyrights @ 2022 Techno. All Rights Reserved Copyrights Techno</p>
          <div className="link">
            <a className="link-bottom" href="#">
              Privacy Policy
            </a>
            |
            <a className="link-bottom" href="#">
              Terms & Conditions
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Login;
