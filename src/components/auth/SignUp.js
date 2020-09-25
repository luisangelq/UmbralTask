import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  //State for log in
  const [user, saveuser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
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

    //must have at least 8 characters

    //must have the same password
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
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
  );
};

export default SignUp;
