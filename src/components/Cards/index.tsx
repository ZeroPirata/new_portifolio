import { IProjects } from 'interfaces/projects'
import { formatLocalDatetime } from 'utils/formaterDate'
import { imagePathResolve } from 'utils/imageresolver'
import { SCardProject } from './style'
import { useTranslation } from 'react-i18next'

interface Props extends IProjects {
  index: number
}

export const CardProject: React.FC<Props> = (selectedProject: Props) => {
  const { i18n } = useTranslation()
  const [t] = useTranslation(['projects'])
  const jsonProject: IProjects[] = t(`projects:projetos`, {
    returnObjects: true,
  })
  const selected = jsonProject[selectedProject.index]
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
        src={imagePathResolve(selected.imagens[0])}
      />
      <SCardProject.Body>
        <SCardProject.Title className="title">
          {selected.nome}
        </SCardProject.Title>
        <SCardProject.Header>
          {i18n.language === 'pt-BR' ? 'Empresa' : 'Company'}:{' '}
          {selected.empresa}
        </SCardProject.Header>
        <SCardProject.Text>
          <p>{truncateText(selected.desafio, 250)}</p>
        </SCardProject.Text>
        <SCardProject.Footer>
          <small className="text-muted">
            {formatLocalDatetime(selectedProject.dataInicio) +
              ' - ' +
              formatLocalDatetime(selectedProject.dataFinal)}
            <a href={selectedProject.referencia}>{i18n.language === "pt-BR" ? "Acessar" : "Access"}</a>
          </small>
        </SCardProject.Footer>
      </SCardProject.Body>
    </SCardProject>
  )
}
