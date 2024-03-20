import { IProjects } from 'interfaces/projects'
import { formatLocalDatetime } from 'utils/formaterDate'
import { imagePathResolve } from 'utils/imageresolver'
import { SCardProject } from './style'
import { useTranslation } from 'react-i18next'
import { Carousel, Image } from 'react-bootstrap'
import { useState } from 'react'

interface Props {
  index: number
}

export const CardProject: React.FC<Props> = (selectedProject: Props) => {
  const { i18n } = useTranslation()
  const [t] = useTranslation(['projects'])
  const jsonProject: IProjects[] = t(`projects:projetos`, {
    returnObjects: true,
  })

  const truncateText = (text: string, maxLength: number, verMaisLink?: string) => {
    if (text.length > maxLength) {
      const truncatedText = text.slice(0, maxLength) + '...';
      if (verMaisLink) {
        return (
          <span>
            {truncatedText}
            <a href={verMaisLink}>
              {i18n.language === "pt-BR" ? "ler mais" : "read more"}
            </a>
          </span>
        );
      } else {
        return <>{truncatedText}</>;
      }
    } else {
      return <>{text}</>;
    }
  };




  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <SCardProject activeIndex={index} onSelect={handleSelect} variant='dark'>
      {jsonProject.map((item, idx) => (
        <Carousel.Item key={idx}>
          <div className="carousel-image-wrapper">
            <Image
              className="carousel-image"
              src={imagePathResolve(item.imagens[0])}
              alt={item.nome}
            />
          </div>
          <Carousel.Caption className="carousel-caption">
            <div className="caption-background">
              <h3 className="caption-text">{item.nome}</h3>
              <p className="caption-text">{truncateText(item.desafio, 300, item.referencia)} </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </SCardProject>
  )
}

// <SCardProject>
//   <SCardProject.Img
//     className="card-image"
//     variant="top"
//     src={imagePathResolve(selected.imagens[0])}
//   />
//   <SCardProject.Body>
//     <SCardProject.Title className="title">
//       {selected.nome}
//     </SCardProject.Title>
//     <SCardProject.Header>
//       {i18n.language === 'pt-BR' ? 'Empresa' : 'Company'}:{' '}
//       {selected.empresa}
//     </SCardProject.Header>
//     <SCardProject.Text>
//       <p>{truncateText(selected.desafio, 250)}</p>
//     </SCardProject.Text>
//     <SCardProject.Footer>
//       <small className="text-muted">
//         {formatLocalDatetime(selectedProject.dataInicio) +
//           ' - ' +
//           formatLocalDatetime(selectedProject.dataFinal)}
//         <a href={selectedProject.referencia}>{i18n.language === "pt-BR" ? "Acessar" : "Access"}</a>
//       </small>
//     </SCardProject.Footer>
//   </SCardProject.Body>
// </SCardProject>