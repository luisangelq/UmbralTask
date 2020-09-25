import React from 'react'
import NewProject from '../projects/NewProject'
import ProjectList from '../projects/ProjectList'

const SideBar = () => {
    return (
        <aside>
            <h1>UmbralTask</h1>

            <NewProject/>

            <div className="proyectos">
                <h2>Your Projects</h2>

                <ProjectList />
            </div>

        </aside>
    )
}

export default SideBar
