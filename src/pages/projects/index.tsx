import { ProjectSection } from './style'
import jsonProjects from 'static/projects.json'
import { CardProject, RenderSquareProject } from '../../components'
import { Col, Container, Row } from 'react-bootstrap'
import './style'
import { useEffect, useState } from 'react'
import { IProjects } from 'interfaces/projects'

const Projects = () => {
  const jsonProject = jsonProjects
  const [selectedProject, setSelectedProject] = useState<IProjects | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % jsonProject.length
      setSelectedProject(jsonProject[nextIndex])
      setIndex(nextIndex)
    }, 10000)

    return () => clearInterval(interval)
  }, [selectedProject, index, jsonProject])

  const handleClick = (project: IProjects, index: number) => {
    setSelectedProject(project)
    setIndex(index)
  }

  return (
    <ProjectSection>
      <Container>
        <Row className="container-main">
          <h1 className="border-black text-center">Projetos Realizados</h1>
          <Col lg="5" className="block-list">
            <div className="container-images">
              {jsonProject?.map((p, index) => (
                <button key={index} onClick={() => handleClick(p, index)}>
                  <RenderSquareProject imagens={p.imagens[0]} />
                </button>
              ))}
            </div>
          </Col>
          <Col lg="5" className="m-lg-auto">
            {selectedProject && <CardProject {...selectedProject} />}
          </Col>
        </Row>
      </Container>
    </ProjectSection>
  )
}
export default Projects
