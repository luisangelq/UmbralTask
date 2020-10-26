import React from "react";

import HeaderLogin from "../layout/HeaderLogin";
import FooterLogin from "../layout/Footer";

const About = () => {
  return (
    <div className="login-page">
      <HeaderLogin />
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Contact</h1>
          <div>
            <ul>
              <li>Luis Angel Quiñones Guerrero</li> <br/>
              <li>Tel.  +52 33 2626 4356</li> <br/>
              <li><a href="https://www.linkedin.com/in/luis-angel-quiñones-guerrero-a40075198">LinkenIn 🔗</a></li> <br/>
              Email:
              <li>luisangelneko31@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterLogin />
    </div>
  );
};

export default About;
