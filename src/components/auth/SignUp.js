import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

import HeaderLogin from "../layout/HeaderLogin";
import FooterLogin from "../layout/Footer";

const SignUp = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authUser, registerUser } = authContext

  //if the user authenticated or registered or duplicade register
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
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //extract user
  const { name, email, password, confirm } = user;

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
    if(name.trim() === "" || email.trim() === "" || password.trim() === "" || confirm.trim() === "") {
      showAlert("All fields are required", "alerta-error");
      return;
    }

    //must have at least 8 characters
    if(password.length < 8) {
      showAlert("Password must be at least 8 characters", "alerta-error");
      return;
    }

    //must have the same password
    if(password !== confirm) {
      showAlert("Both passwords must be the same", "alerta-error");
      return;
    }

    registerUser({
      name,
      email,
      password
    });
  };
  return (
    <div className="login-page">
      <HeaderLogin />
      <div className="form-usuario">
        
        <div className="contenedor-form sombra-dark">
        {alert ? (
          <div className={`alerta ${alert.category}`}>{alert.msg}</div>
        ) : null}
          <h1>Create Account</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={onChange}
              />
            </div>

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
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                placeholder="Confirm Your Password"
                value={confirm}
                onChange={onChange}
              />
            </div>

            <div className="campo-form">
              <button type="submit" className="btn btn-primario btn-block">
                Register
              </button>
            </div>
          </form>

          <Link to={"/"} className="enlace-cuenta">
            I already have an account
          </Link>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
};

export default SignUp;
