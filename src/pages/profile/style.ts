import styled from "styled-components";


export const AboutSection = styled.section`
    background-color: var(--ColorMiddleBlue);
    width: 100vw;
    height: 50vh;
    .container-about{
        width: 100vw;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rows{
        width: 100%;
    }
    .picture {
        background-color: red;
        border: var(--ColorBlue);
        background-color: var(--ColorBlue);
    }
    .name {
        color: #FFFFFF;
        font-size: 60px;
        margin: 0;
        padding: 0;
    }
    .title, .tecnologies {
        font-size: 26px;
        letter-spacing: -3px;
        color: #FFFFFF;
        margin: 0;
        padding: 0;
    }
    .placement{
        font-size: 20px;
        color: #FFFFFF;
        margin: 0;
        padding: 0;
    }
    .midia {
        display: flex;
        width: 50%;
        margin: 10px auto;
        justify-content: space-evenly;
    }
`

export const ProjectsSection = styled.section`
    .container-project{
        height: 50vh;
    }
`