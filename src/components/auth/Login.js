import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

import HeaderLogin from "../layout/HeaderLogin";
import FooterLogin from "../layout/Footer";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authUser, logIn } = authContext;

  useEffect(() => {
    if (authUser) {
      props.history.push("/projects");
    }

    if(message) {
      showAlert(message.msg, message.category);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, authUser, props.history])

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
    if (email.trim() === "" || password.trim() === "") {
      showAlert("All fields are required", "alerta-error");
    }

    logIn({email, password});
  };
  return (
    <div className="login-page">
      <HeaderLogin />
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          {alert ? (
            <div className={`alerta ${alert.category}`}>{alert.msg}</div>
          ) : null}
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
      <FooterLogin />
    </div>
  );
};

export default Login;
