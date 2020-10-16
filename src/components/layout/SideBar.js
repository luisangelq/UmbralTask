import React from "react";
import NewProject from "../projects/NewProject";
import ProjectList from "../projects/ProjectList";
import Logo from "../../styles/media/logo.mp4";

const SideBar = () => {
  return (
    <aside>
        <video autoPlay loop muted>
          <source src={Logo} type="video/mp4" />
        </video>
    

      <NewProject />

      <div className="proyectos">
        <h2>Your Projects</h2>

        <ProjectList />
      </div>
    </aside>
  );
};

export default SideBar;
