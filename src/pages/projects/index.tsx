import { ProjectSection } from './style'
import { CardProject, RenderSquareProject } from '../../components'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import './style'
import { useEffect, useState } from 'react'
import { IProjects } from 'interfaces/projects'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { i18n } = useTranslation()
  const [t] = useTranslation(['projects'])

  const jsonProject: IProjects[] = t('projects:projetos', {
    returnObjects: true,
  })
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

  return (
    <ProjectSection>
      <Container>
        <Row className="container-main">
          <h1 className="border-black text-center">
            {i18n.language === 'pt-BR'
              ? 'Projetos Realizados'
              : 'Projects Completed'}
          </h1>
          <CardProject index={index} />
        </Row>
      </Container>
    </ProjectSection>
  )
}
export default Projects

/* 

<Col lg="5" className="block-list">
            <div className="container-images">
              {jsonProject?.map((p: IProjects, index: number) => (
                <button key={index} onClick={() => handleClick(p, index)}>
                  <RenderSquareProject imagens={p.imagens[0]} />
                </button>
              ))}
            </div>
          </Col>
          <Col lg="5" className="m-lg-auto">
            {selectedProject && (
              <CardProject {...selectedProject} index={index} />
            )}
          </Col>

*/