import { ProjectProps } from "interfaces";
import { IProjects } from "interfaces/projetos"
import { FunctionComponent, useState, useRef } from "react";
import { ProjectsContainer } from "./style";
import jsonProjects from 'static/projects.json'
import { formatUnixtimeToDate } from "utils/formaterDate";
import ProjectCards from "components/projectscards";

const Project: FunctionComponent<ProjectProps> = () => {
    const projetos: Array<IProjects> = jsonProjects

    const [visibleCard, setVisibleCard] = useState(false)
    const [projetcSelect, setProjetcSelect] = useState({} as IProjects);

    const handleVisibleCard = (projeto: IProjects) => {
        if (projeto !== undefined) {
            setVisibleCard(!visibleCard);
            setProjetcSelect(projeto);
        }
        else {
            return null
        }
    }

    return (
        <ProjectsContainer id="projects" accentColor="#feca38">
            {visibleCard ? <ProjectCards {...projetcSelect} open={setVisibleCard} /> : null}
            <section className="design-section">
                <h1>Projects</h1>
                <ul>
                    {projetos.map(projeto => (
                        <li>
                            <div className="date">{projeto.nome}</div>
                            <div className="title">
                                <div className="company">
                                    <span>Company:</span><p>{projeto.empresa}</p>
                                </div>
                                <div className="project-date">
                                    <span>
                                        Start: <p>{formatUnixtimeToDate(projeto.dataInicio)}</p>
                                        - End: <p>{formatUnixtimeToDate(projeto.dataFinal)}</p>
                                    </span>
                                </div>
                            </div>
                            <div className="descr">
                                <span>Description</span>
                                <p>{projeto.desafio}</p>
                            </div>
                            <div className="see-more"><button onClick={() => handleVisibleCard(projeto)}>See more</button></div>
                        </li>
                    ))}
                </ul>
            </section>
        </ProjectsContainer >
    );
}

export default Project;