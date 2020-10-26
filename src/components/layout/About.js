import React from "react";

import HeaderLogin from "../layout/HeaderLogin";
import FooterLogin from "../layout/Footer";

const About = () => {
  return (
    <div className="login-page">
      <HeaderLogin />
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>About</h1>
          <span>
            Welcome to UmbralTask, this project was created with the MERN stack
            and you can see most of the topics seen during the course, in this
            project I work with, React, GitHub, Json, CSS, Data Types, SQL
            (mongo), JavaScript , HTML, UI / UX. <br/>In addition to some
            methodologies and best practices such as Algorithms, Quality,
            Problem Solving, OOP, APIs and more. <br/> In addition, it worked with
            other tools not seen in the course such as NodeJS, authentication
            via tokens, and with the most recent react documentation. <br/> Steps to
            use the application: <br/> 1- You must create an account. <br/> 2- In your panel
            you can create projects and assign them tasks. <br/> 3- You can log out
            and log in again with your credentials.
          </span>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
};

export default About;
