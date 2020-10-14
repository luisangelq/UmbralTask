import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderBar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">
                <FontAwesomeIcon icon={faUser}/> 
                Hola Luis Angel
            </p>

            <nav className="nav-principal">
                <a href="#!">Log Out <FontAwesomeIcon icon={faSignOutAlt}/></a>
            </nav>
        </header>
    )
}

export default HeaderBar
