import { IProjectCards } from "interfaces/projectCards";
import React, { FunctionComponent, useEffect } from "react";
import { MainContainer } from "./style";
import Carousel from "components/carrosel";

const ProjectCards: FunctionComponent<IProjectCards> = ({ ...rest }) => {

    const handleCloseProfile = () => {
        if (rest.open) {
            rest.open(false)
        }
    };

    const handleKeyBoardEvent = (event: KeyboardEvent) => {
        if (event.key === "Escape" && rest.open) {
            rest.open(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyBoardEvent)
        return () => { document.removeEventListener('keydown', handleKeyBoardEvent) }
    })



    return (
        <MainContainer>
            <div className="main-card">
                <div className="header">
                    <div className="header-title">
                        <div className="title">Project: <span>{rest.nome}</span></div>
                        <div className="company">Company: <span>{rest.empresa}</span></div>
                        <div className="group">Group: <span>{rest.equipe}</span></div>
                        <button className="cross" onClick={handleCloseProfile}>X</button>
                    </div>
                </div>
                {/* <div className="carousel">
                    <Carousel children={rest.imagens} />
                </div> */}
                <div className="desc">{rest.desafio}</div>
            </div>
        </MainContainer>
    );
}

export default ProjectCards;