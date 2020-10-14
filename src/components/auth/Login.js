import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeaderLogin from "../layout/HeaderLogin";
import FooterLogin from "../layout/Footer";

const Login = () => {
  //State for log in
  const [user, saveuser] = useState({
    email: "",
    password: "",
  });

  //extract user
  const { email, password } = user;

  const onChange = (e) => {
    saveuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //When the user wants to log in
  const onSubmit = (e) => {
    e.preventDefault();

    //validation
  };
  return (
    <div className="login-page">
      <HeaderLogin />
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Sign-In</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <button type="submit" className="btn btn-primario btn-block">
                Log In
              </button>
            </div>
          </form>

          <Link to={"/sign-up"} className="enlace-cuenta">
            Sign Up
          </Link>
        </div>
      </div>
      <FooterLogin/>
    </div>
  );
};

export default Login;
