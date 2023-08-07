import {styled} from "styled-components";

export const MainContainer = styled.section`
  margin-top: 9vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .main-card {
    width: 95%;
    background-color: white;

    .header > .header-title {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .title {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .cross {
      grid-column-start: 3;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      width: 100px;
    }
    .company {
      grid-column-start: 4;
      grid-column-end: 1;
      grid-row-start: 4;
      grid-row-end: 4;
    }
    .group {
      grid-column-start: 4;
      grid-column-end: 1;
      grid-row-start: 3;
      grid-row-end: 3;
    }
  }
`;
/* 
.main-card {
    background-color: white;
    border: 3px solid black;
    border-radius: 25px 0;
    width: 80%;
    display: flex;
  }
  .carousel {
    height: 50%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    .header-title {
      width: 100%;
      margin: 0 1em;
      font-size: 1.5em;
      .title,
      .company,
      .group {
        span {
          font-weight: bold;
          margin: 0 5px;
        }
      }
    }
  }
*/
