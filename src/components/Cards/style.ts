import styled from 'styled-components'
import Card from 'react-bootstrap/Carousel'

export const SCardProject: typeof Card = styled(Card)`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  .card-image {
    height: 250px;
  }
  .title {
    color: var(--ColorLightBlue);
    font-weight: bolder;
  }
  a{
    color: red;
    text-decoration: none;
  }
  .text-muted{
    display: flex;
    justify-content: space-between;
  }

.carousel-image-wrapper {
  display: flex;
  justify-content: center;
}

.carousel-image {
  height: 75vh;
}

.carousel-caption {
  color: #000; 
  text-align: center;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 300px; 
  height: 300px;
}


/* Estilize a posição das setas */
.carousel-control-prev {
  left: -5%;
}

.carousel-control-next {
  right: -5%;
}

/* Estilize a caixa de fundo com opacidade para o título e a descrição */
.caption-background {
  background-color: rgba(0, 0, 0, 0.8); /* Cor de fundo com opacidade */
  padding: 10px; /* Espaçamento interno */
}

/* Estilize o texto dentro da caixa de fundo */
.caption-text {
  color: #fff; /* Cor do texto */
}


`
