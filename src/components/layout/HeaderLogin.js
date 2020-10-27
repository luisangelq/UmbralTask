import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../styles/media/logo.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderBar = () => {
  return (
    <header className="header-login">
      <video autoPlay loop muted style={{width: "100px"}}>
        <source src={Logo} type="video/mp4" />
      </video>

      <nav className="nav-principal">
          <Link to={"/"} >
            Sign In <FontAwesomeIcon icon={faSignInAlt}/>
      </Link>
      <Link to={"/sign-up"}  >
            Sign Up <FontAwesomeIcon icon={faUserPlus}/>
      </Link>
      
      <Link to={"/contact"} >
            Contact <FontAwesomeIcon icon={faPhoneAlt}/>
      </Link>
      <Link to={"/about"} >
            About This Project
      </Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
