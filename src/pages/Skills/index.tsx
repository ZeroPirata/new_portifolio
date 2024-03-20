import { ContainerStyld } from './style'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Skills: React.FC = () => {
  const [t] = useTranslation(['hardsoft'])

  const hardSkillList: string[] = t(`hardsoft:hardSkill`, {
    returnObjects: true,
  })
  const softSkillList: string[] = t(`hardsoft:softSkill`, {
    returnObjects: true,
  })
  return (
    <ContainerStyld>
      <Container>
        <Row className="justify-content-between ajust-row">
          <Col sm="12" className="col-12-text">
            <h1>Hard Skill & Soft Skill</h1>
          </Col>
          <Col sm="5" className="skills-container">
            <h3>Hard Skill</h3>
            {hardSkillList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </Col>
          <Col sm="5" className="skills-container">
            <h3>Soft Skill</h3>
            {softSkillList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </Col>
        </Row>
      </Container>
    </ContainerStyld>
  )
}

export default Skills
