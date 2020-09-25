import React from 'react'

const HeaderBar = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola Luis Angel</p>

            <nav className="nav-principal">
                <a href="#!">Log Out</a>
            </nav>
        </header>
    )
}

export default HeaderBar
