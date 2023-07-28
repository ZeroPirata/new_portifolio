import { ProjectProps } from "interfaces";
import { IProjects } from "interfaces/projetos"
import { FunctionComponent, useEffect, useRef } from "react";
import { ProjectsContainer } from "./style";
import jsonProjects from 'static/projects.json'

const Project: FunctionComponent<ProjectProps> = () => {
    const projetos: Array<IProjects> = jsonProjects

    return (
        <ProjectsContainer id="projects" accentColor="#feca38">
            <section className="design-section">
                <h1>Projects</h1>
                <ul>
                    {projetos.map(projeto => (
                        <li>
                            <div className="date">{projeto.nome}</div>
                            <div className="title">{projeto.empresa}</div>
                            <div className="descr">{projeto.desafio}</div>
                            <div className="see-more"><a href="/">See more</a></div>
                        </li>
                    ))}
                </ul>
            </section>
        </ProjectsContainer >
    );
}

export default Project;