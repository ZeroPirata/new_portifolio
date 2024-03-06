import styled from "styled-components";
import { Container } from "react-bootstrap"

export const ContainerStyld = styled(Container)`
    h1, h3 {
        color: #FFF;
        font-weight: bold;
    }
    padding: 2em 0;
    background-color: var(--ColorMiddleBlue);
    .col-12-text{
        text-align: center;
    }
    
    .skills-container {
        margin: 1em 0;
        background: linear-gradient(180deg, #010B40 0%, rgba(255, 255, 255, 0.1) 100%);
        box-shadow: 0px 15px 6.5px 3px rgba(0, 0, 0, 0.5);
        height: 20em;
        overflow: auto;
        color: #FFF;
        li {
            color: inherit;
        }
    }
`