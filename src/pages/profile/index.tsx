import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { imagePathResolve } from "utils/imageresolver"
import { AboutSection, ProjectsSection } from './style';
import jsonAboutUtils from "static/utils.json"
import { SocialIcons } from 'components';
import { SocialMediaProfile } from 'interfaces/socialicons';

const Profile = () => {
    const jsonAbout = jsonAboutUtils
    const profilePictureRender = imagePathResolve(jsonAbout.profilePicture)
    const socialMedia: SocialMediaProfile[] = jsonAbout.socialMidias as SocialMediaProfile[];
    console.log(socialMedia)
    return (
        <Stack>
            <AboutSection>
                <div className="container-about">
                    <Row className="justify-content-md-center rows">
                        <Col md lg="2" className='col-width'>
                            <Image src={profilePictureRender} thumbnail className='picture' />
                        </Col>
                        <Col lg="4">
                            <p className='name'>{jsonAbout.name}</p>
                            <p className='placement'>{jsonAbout.placement}</p>
                            <p className='title'>{jsonAbout.title}</p>
                            <p className='tecnologies'>{jsonAbout.tecnologies}</p>
                            <div className='midia'>
                                {socialMedia && socialMedia.map(m => (
                                    m && <SocialIcons
                                        key={m.socialName}
                                        name={m.socialName}
                                        backgroundColor='none'
                                        height={75}
                                        width={75}
                                        iconColor='white'
                                        linkIcon={m.url}
                                        type={m.type}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </AboutSection>
            <ProjectsSection className="p-2">
                <div className='container-project'></div>
            </ProjectsSection>
        </Stack>
    )
}
export default Profile