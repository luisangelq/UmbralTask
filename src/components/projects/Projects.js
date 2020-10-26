import React, {useContext, useEffect} from "react";
import HeaderBar from "../layout/HeaderBar";
import SideBar from "../layout/SideBar";
import FormTask from "../tasks/FormTask";
import ListTask from "../tasks/ListTask";
import AuthContext from "../../context/auth/authContext"


const Projects = () => {

  const authContext = useContext(AuthContext);
  const { userAuth } = authContext;
  
  useEffect(() => {
    userAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    
      <div className="seccion-principal">
        
        <div className="header-bar">
          <HeaderBar />
        </div>

        <div className="side-bar">
          <SideBar />
        </div>
        
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTask />
          </div>
        </main>
      </div>
  );
};

export default Projects;
