import React, {useContext, useEffect} from "react";

import AuthContext from "../../context/auth/authContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderBar = () => {
const authContext = useContext(AuthContext);
  const {user, userAuth, logOut } = authContext;
  
  useEffect(() => {
    userAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
        <header className="app-header">
            {user ? <p className="nombre-usuario">
                <FontAwesomeIcon icon={faUser} style={{marginRight: "10px"}}/> 
                {user.name}
            </p> : null}
            

            <nav className="nav-principal">
                <button 
                className=" log-out btn btn-blank "
                onClick={() => logOut()}
                >Log Out <FontAwesomeIcon icon={faSignOutAlt}/></button>
            </nav>
        </header>
    )
}

export default HeaderBar
