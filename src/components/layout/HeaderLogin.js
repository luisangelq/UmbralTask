import React from "react";

import Logo from "../../styles/media/logo.mp4";

const HeaderBar = () => {
  return (
    <header className="header-login">
      <video autoPlay loop muted style={{width: "100px"}}>
        <source src={Logo} type="video/mp4" />
      </video>

      <nav className="nav-principal">
        <a href="#!">About</a>
        <a href="#!">Contact</a>
      </nav>
    </header>
  );
};

export default HeaderBar;
