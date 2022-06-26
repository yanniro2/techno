/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import mainlogo from "../Img/main_logo.png";
// import axios from "axios";
import { Link } from "react-router-dom";
function Register() {
  const [data, setData] = React.useState([
    {
      fname: "",
      lname: "",
      email: "",
      password: "",
      re_password: "",
    },
  ]);

  // function handleform(e) {
  //   e.preventDefault();
  //   console.log("Working");
  //   console.log(data);

  //   axios
  //     .post("http://localhost:3000/Register", data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <div className="Register">
      <div className="Sidebar">
        <img src={mainlogo} alt="mainlogo" />
      </div>
      <div className="Register-layout">
        {/* <form onSubmit={handleform}> */}
        <div className="Register-form">
          <h4>Welcome to Techno</h4>
          <h2>Register to your Account</h2>
          <div className="Register-input">
            <div className="input">
              <label htmlFor="fname">Firstname</label>
              <input
                onChange={handleChange}
                type="text"
                name="fname"
                id="fname"
                placeholder=" John / Smith "
                className="input-text"
              />
            </div>
            <div className="input">
              <label htmlFor="lname">lastname</label>
              <input
                onChange={handleChange}
                type="text"
                name="lname"
                id="lname"
                placeholder=" John /Smith"
                className="input-text"
              />
            </div>
            <div className="input">
              <label htmlFor="username">Email </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder=" John123@gmail.com "
                className="input-text"
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Secret password"
                className="input-pass"
              />
            </div>
            <div className="input">
              <label htmlFor="re_password">Re-Password</label>
              <input
                onChange={handleChange}
                type="re_password"
                name="re_password"
                id="re_password"
                placeholder="Re-Enter Secret password"
                className="input-pass"
              />
            </div>
          </div>

          <div className="box">
            <button
              className="input-btn"
              // onClick={handleform}
            >
              <Link to="/Register" className="Link-btn">
                Register
              </Link>
              {/* Register */}
            </button>
            <span>or</span>
            <button className="register-btn">
              <Link to="/techno" className="Link-hyper">
                Login
              </Link>
              {/* login */}
            </button>
          </div>
        </div>
        {/* </form> */}
        {/* <footer className="Register-footer ">
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
        </footer> */}
      </div>
    </div>
  );
}

export default Register;
