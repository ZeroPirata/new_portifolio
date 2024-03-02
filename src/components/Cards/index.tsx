import { IProjects } from 'interfaces/projects'
import Card from 'react-bootstrap/Card'
import { formatLocalDatetime } from 'utils/formaterDate'
import { imagePathResolve } from 'utils/imageresolver'
import { SCardProject } from './style'

export const CardProject: React.FC<IProjects> = (
  selectedProject: IProjects,
) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    } else {
      return text
    }
  }
  return (
    <SCardProject>
      <SCardProject.Img
        className="card-image"
        variant="top"
        src={imagePathResolve(selectedProject.imagens[0])}
      />
      <SCardProject.Body>
        <SCardProject.Title className="title">
          {selectedProject.nome}
        </SCardProject.Title>
        <SCardProject.Header>
          Empresa: {selectedProject.empresa}
        </SCardProject.Header>
        <SCardProject.Text>
          {truncateText(selectedProject.desafio, 250)}
        </SCardProject.Text>
        <SCardProject.Footer>
          <small className="text-muted">
            {formatLocalDatetime(selectedProject.dataInicio) +
              ' - ' +
              formatLocalDatetime(selectedProject.dataFinal)}
          </small>
        </SCardProject.Footer>
      </SCardProject.Body>
    </SCardProject>
  )
}
