import { ContainerStyld } from "./style"
import { Container, Row, Col } from "react-bootstrap"
import jsonSkills from 'static/utils.json'
const Skills: React.FC = () => {
    const hardSkillList: string[] = jsonSkills.hardSkill
    const softSkillList: string[] = jsonSkills.softSkill
    return (
        <ContainerStyld fluid>
            <Container>
                <Row className="justify-content-between ajust-row">
                    <Col sm="12" className="col-12-text">
                        <h1>Hard Skill & Soft Skill</h1>
                    </Col>
                    <Col sm="5" className="skills-container">
                        <h3>Hard Skill</h3>
                        {hardSkillList.map(skill => (
                            <li>{skill}</li>
                        ))}
                    </Col>
                    <Col sm="5" className="skills-container">
                        <h3>Soft Skill</h3>
                        {softSkillList.map(skill => (
                            <li>{skill}</li>
                        ))}
                    </Col>
                </Row>
            </Container>
        </ContainerStyld>
    )
}

export default Skills