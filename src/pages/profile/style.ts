import styled from "styled-components";


export const AboutSection = styled.section`
    width: 100vw;
    padding: 10px 0;
    background-color: var(--ColorMiddleBlue);
    .midia {
        display: flex;
        width: 50%;
        margin: 10px auto;
        justify-content: space-evenly;
    }

    .profile-box{
        width: 50%;
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
    }

    .foto-perfil-box{
        display: flex;
        align-items: center;
        .foto-perfil {
            border-radius: 10px;
            border: var(--ColorBlue);
            background-color: var(--ColorBlue);
        }
    }

    @media screen and (max-width: 1444px){
        .description{
                .name {
                    font-size: 30px;
                }
        }
    }

    @media screen and (max-width: 1024px){
        .foto-perfil-box{
            width: 20%;
            .foto-perfil {
                width: 100%;
                border: var(--ColorBlue);
                background-color: var(--ColorBlue);
            }
        }
        .description{
                .title, .tecnologies {
                    font-size: 25px;
                }
            }
    }

    @media screen and (max-width: 912px) {
        .foto-perfil-box{
            width: 40%;
        }
        .profile-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .midia{
            width: 80%;
        }
    }

    @media screen and (max-width: 853px){
        .foto-perfil-box {
            justify-content: center;
            width: 50%;
            .foto-perfil {
                width: 70%;
                border: var(--ColorBlue);
                background-color: var(--ColorBlue);
            }
        }
        .description{
            width: 100%;
        }
        .midia {
            width: 70%;
            justify-content: space-evenly;
        }
    }

    @media screen and (max-width: 540px){
        .foto-perfil-box{
            justify-content: center;
            margin: 10px auto;
            width: 70%;
        }
        .profile-box{            
            width: 100%;
            .description{
                margin: 0 auto;
                width: 85%;
            }
        }
    }

    @media screen and (max-width: 430px) {
        .foto-perfil-box {
            justify-content: center;
            margin: 10px 0;
            width: 100%;
            .foto-perfil {
                width: 65%;
                border: var(--ColorBlue);
                background-color: var(--ColorBlue);
            }
        }
        .profile-box{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .description{
                width: 80%;
                .name {
                    font-size: 30px;
                }
                .placement{
                    font-size: 15px;
                }
                .title, .tecnologies {
                    font-size: 13px;
                    letter-spacing: -1px;
                }
            }

        }
    }

    @media screen and (max-width: 365px) {
        .profile-box{
            .description{
                .name {
                    font-size: 25px;
                }
                .placement{
                    font-size: 13px;
                }
                .title, .tecnologies {
                    font-size: 15px;
                    letter-spacing: -1px;
                }
            }
        }
    }

    @media screen and (max-width: 280px){
        .profile-box{
            .description{
                .name {
                    font-size: 20px;
                }
                .placement{
                    font-size: 10px;
                }
                .title, .tecnologies {
                    font-size: 13px;
                    letter-spacing: -1px;
                }
            }
        }
    }
`
