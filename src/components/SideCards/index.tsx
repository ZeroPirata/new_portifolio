import { IProjects } from 'interfaces/projects'
import { BodyCard } from './style'
import { formatLocalDatetime } from 'utils/formaterDate'
import { imagePathResolve } from 'utils/imageresolver'
import { SocialIcons } from 'components'
import { useTranslation } from 'react-i18next'
interface IProps extends IProjects {
  index: number
}

export const SideCards: React.FC<IProps> = ({ ...project }: IProps) => {
  const { i18n } = useTranslation()
  const boolean = i18n.language === "pt-BR"
  return (
    <BodyCard>
      <div className="projeto">
        <h3>{boolean ? "Equipe" : "Team"} - {project.equipe}</h3>
        <SocialIcons
          key={project.index}
          name={'github'}
          backgroundColor="none"
          iconColor="white"
          linkIcon={project.referencia}
          type={'NetWork'}
        />
      </div>
      <div className="info-basic">
        <div className="box-project">
          <p>
            {boolean ? "Nome" : "Name"} <br />
            <span>{'- ' + project.nome}</span>
          </p>
          <p>
            {boolean ? "Empresa" : "Company"} <br />
            <span>{'- ' + project.empresa}</span>
          </p>
          <p>
            {boolean ? "Data" : "Date"} <br />
            <span>
              {'- ' +
                formatLocalDatetime(project.dataInicio) +
                ' ... ' +
                formatLocalDatetime(project.dataFinal)}
            </span>
          </p>
          <p>
            {boolean ? "Função" : "Occupation"} <br />- {project.papel.equipe}
          </p>
          <div className="tecnologias">
            <p>{boolean ? "Tecnologias e Ferramentas" : "Technologies and Tools"}</p>
            <div className="array-tecnologias">
              <p>
                {project.tecnologia.map((t, index) =>
                  index === project.tecnologia.length - 1
                    ? t.nome
                    : t.nome + ' - ',
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="description-card">
        <h4>{boolean ? "Descrição do projeto" : "Project description"} </h4>
        <div className="description">
          <p>{project.desafio}</p>
        </div>
        <div className="images">
          {project.imagens.map((i) => (
            <img src={imagePathResolve(i)} alt={project.nome + '-image'} />
          ))}
        </div>
      </div>
    </BodyCard>
  )
}
