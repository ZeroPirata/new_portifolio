import styled from 'styled-components'

export const BodyCard = styled.div`
  background-color: var(--ColorMiddleBlue);
  width: 80%;
  height: 45%;
  margin: 5px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  justify-items: center;
  grid-template-areas:
    'projeto projeto'
    'info-basic description-card';

  .projeto {
    grid-area: projeto;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    width: 95%;
  }

  .info-basic {
    background-color: white;
    height: 95%;
    width: 90%;
    padding: 1em;
    overflow: auto;
  }

  .info-basic > .box-project {
    overflow-y: auto;
    white-space: nowrap;
  }

  .tecnologias {
    p {
      padding: 0;
      margin: 0;
    }

    .array-tecnologias {
      p {
        font-size: 0.8em;
      }
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .description-card {
    overflow: hidden;
    color: white;
    height: 100%;
    width: 100%;
    display: flex; /* Center the content horizontally */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */

    .description {
      height: 50%;
      width: 95%;
      overflow-y: auto;
    }

    .images {
      overflow: hidden;
      display: flex;
      justify-content: center; /* Center images horizontally */
      flex-wrap: wrap; /* Allow images to wrap */
      width: 95%;
      margin: 0 auto; /* Center the images */
    }

    img {
      margin: 5px; /* Add margin between images */
      height: 100px;
    }
  }

  @media (max-width: 1024px) {
    height: 100%;
    justify-content: space-around;
    grid-template-areas:
      'projeto'
      'info-basic'
      'description-card';
    grid-template-columns: 1fr;
    margin: 10px 0;
    padding: 0;
    .description-card {
      .description{
        height: 500px;
      }
    .images {
      flex-wrap: wrap; 
      justify-content: center;
      overflow: scroll; 
    }

    img {
      margin: 5px; 
      max-width: 100%; 
      height: 200px;
    }
  }
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`;
