import { IProjects } from 'interfaces/projects'
import { BodyCard } from './style'
import { formatLocalDatetime } from 'utils/formaterDate'
import { imagePathResolve } from 'utils/imageresolver'
import { ImageModal, SocialIcons } from 'components'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
interface IProps extends IProjects {
  index: number
}

export const SideCards: React.FC<IProps> = ({ ...project }: IProps) => {
  const { i18n } = useTranslation()
  const boolean = i18n.language === "pt-BR"

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage('');
  };

  return (
    <BodyCard>
      <div className="projeto">
        <h4>{boolean ? "Equipe" : "Team"} - {project.equipe}</h4>
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
            {boolean ? "Função" : "Occupation"} <br />- <span> {project.papel.equipe}</span>
          </p>
          <div className="tecnologias">
            <p>{boolean ? "Tecnologias e Ferramentas" : "Technologies and Tools"}</p>
            <div className="array-tecnologias">
              <span>
                {project.tecnologia.map((t, index) =>
                  index === project.tecnologia.length - 1
                    ? t.nome
                    : t.nome + ' - ',
                )}
              </span>
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
          {project.imagens.map((i, index) => (
            <img
              key={index}
              src={imagePathResolve(i)}
              alt={project.nome + '-image'}
              onClick={() => handleImageClick(imagePathResolve(i))}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal src={selectedImage} alt={project.nome + '-image'} onClose={handleCloseModal} />
      )}
    </BodyCard>
  )
}
