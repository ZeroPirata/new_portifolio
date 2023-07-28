import { AboutProps } from "interfaces";
import { FunctionComponent } from "react";
import { BodyContainer } from "./style";

const About: FunctionComponent<AboutProps> = () => {
    return (
        <BodyContainer id="about">
            <p>Sobre</p>
        </BodyContainer>
    );
}

export default About;