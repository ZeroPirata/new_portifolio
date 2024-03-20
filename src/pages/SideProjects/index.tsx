import { Container, Pagination } from 'react-bootstrap'
import { SideCards } from 'components'
import { BodyProjectsFilter, ContainerProjects } from './style'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IProjects } from 'interfaces/projects'

const SideProjects: React.FC = () => {
  const { i18n } = useTranslation()
  const [t] = useTranslation(['projects'])
  const jsonProject: IProjects[] = t(`projects:projetos`, {
    returnObjects: true,
  })

  const projectsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = jsonProject.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  return (
    <Container fluid>
      <BodyProjectsFilter>
        <h1>{i18n.language === "pt-BR" ? "Projetos" : "Projects"}</h1>
        <Pagination>
          {Array.from({ length: Math.ceil(jsonProject.length / projectsPerPage) }).map((_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}
              className={index + 1 === currentPage ? 'active-page' : 'inactive-page'}

            />
          ))}
        </Pagination>
        <ContainerProjects>
          {currentProjects.map((project, index) => (
            <SideCards key={index} {...project} index={index} />
          ))}
        </ContainerProjects>
      </BodyProjectsFilter>
    </Container>
  )
}

export default SideProjects
