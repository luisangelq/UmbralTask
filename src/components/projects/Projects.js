import React from 'react'
import HeaderBar from '../layout/HeaderBar'
import SideBar from '../layout/SideBar'
import FormTask from '../tasks/FormTask'
import ListTask from '../tasks/ListTask'

const Projects = () => {
    return (
        <div className="contenedor-app">
            <SideBar/>

            <div className="seccion-principal">
                <HeaderBar/>

                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                        <ListTask/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects
