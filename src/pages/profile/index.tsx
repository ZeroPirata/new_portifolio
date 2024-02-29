import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { imagePathResolve } from "utils/imageresolver"
import { AboutSection } from './style';
import jsonAboutUtils from "static/utils.json"
import { SocialIcons } from 'components';
import { SocialMediaProfile } from 'interfaces/socialicons';

const Profile = () => {
    const jsonAbout = jsonAboutUtils
    const profilePictureRender = imagePathResolve(jsonAbout.profilePicture)
    const socialMedia: SocialMediaProfile[] = jsonAbout.socialMidias as SocialMediaProfile[];
    return (
        <AboutSection>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg="2" className='foto-perfil-box'>
                        <Image src={profilePictureRender} fluid thumbnail className='foto-perfil' />
                    </Col>
                    <Col lg="4" className='profile-box'>
                        <div className="description">
                            <p className='name'>{jsonAbout.name}</p>
                            <p className='placement'>{jsonAbout.placement}</p>
                            <p className='title'>{jsonAbout.title}</p>
                            <p className='tecnologies'>{jsonAbout.tecnologies}</p>
                        </div>
                        <div className='midia'>
                            {socialMedia && socialMedia.map(m => (
                                m && <SocialIcons
                                    key={m.socialName}
                                    name={m.socialName}
                                    backgroundColor='none'
                                    iconColor='white'
                                    linkIcon={m.url}
                                    type={m.type}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container >
        </AboutSection>
    )
}
export default Profile