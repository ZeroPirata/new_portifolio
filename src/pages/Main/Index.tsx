import { MainProps } from "interfaces";
import { FunctionComponent } from "react";
import { BodyContainer } from "./style";
import { imagePathResolve } from 'utils/imageresolver'
import utils from "static/utils.json"
import midiasJson from "static/midias.json"
import { IMidias } from "interfaces/midias";

const Main: FunctionComponent<MainProps> = () => {
    const profileImg = imagePathResolve(utils.profile)
    const midias: IMidias[] = midiasJson
    return (
        <BodyContainer id="home">
            <section className="body-section">
                <div className="profile-image-container">
                    <section className="profile-image">
                        <img className="image" src={profileImg} alt="ProfilePicture" />
                    </section>
                </div>
                <section className="profile-about">
                    <div className="basic-information">
                        <h3>Gabriel Bicho</h3>
                        <h4>FullStack Developer</h4>
                    </div>
                    <div className="motivation">
                        <p>{utils.motivation}</p>
                    </div>
                    <div className="midia-projetc">
                        {midias.map(midia => (
                            <div className="map-midia">
                                <a href={midia.name === "email" ? `mailto:${midia.url}` : midia.url} target="_blank" rel="noopener noreferrer">
                                    <img className="midia-imgs" src={midia.img} alt={midia.name} />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </BodyContainer>
    );
}

export default Main;