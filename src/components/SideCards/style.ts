import styled from 'styled-components'

export const BodyCard = styled.div`
  background-color: var(--ColorMiddleBlue);
  width: 80%;
  height: 45%;
  margin: 1em auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  padding: 5px;
  justify-items: center;
  border-radius: 25px;
  grid-template-areas:
    'projeto projeto'
    'info-basic description-card';

    h4{
      font-weight: bolder;
      font-size: 1.5em;
    }

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
    border-radius: 5px;
  }


  .info-basic > .box-project {
    overflow-y: auto;
    white-space: nowrap;
    p {
      font-weight: bolder;
      span {
        font-weight: normal;
      }
    }
  }

  .tecnologias {
    p {
      padding: 0;
      margin: 0;
    }

    .array-tecnologias {
      span {
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
    width: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center; 

    .description {
      height: 50%;
      width: 95%;
      overflow-y: auto;
    }

    .images {
      overflow: hidden;
      display: flex;
      justify-content: space-evenly;
      width: 95%;
      overflow-x: auto;
    }

    img {
      margin: 5px; 
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
      overflow: auto; 
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
