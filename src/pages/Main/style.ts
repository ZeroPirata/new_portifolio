import {styled} from "styled-components";

export const BodyContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  .body-section {
    width: 100%;
    height: 50%;
    justify-items: center;
    align-items: center;
    display: flex;
    justify-content: center;
    .profile-image-container {
      height: 80%;
      width: 25%;
      display: flex;
      justify-content: center;
    }
    .profile-image {
      .image {
        height: 100%;
        border-radius: 50%;
        border-color: black;
        border-width: 2px;
        border-style: solid;
        object-fit: cover;
        display: block;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);
      }
    }
    .profile-about {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .midia-projetc {
        margin: 20px 0;
        display: flex;
        width: 35%;
        height: 15%;
        justify-items: center;
        align-items: center;
        justify-content: space-around;
        .map-midia {
          .midia-imgs {
            width: 100%;
            height: 60px;
          }
        }
      }
      .basic-information {
        display: flex;
        h3 {
          color: white;
          display: flex;
          align-items: end;
          font-size: 78px;
          line-height: 100%;
        }
        h4 {
          color: #feca38;
          line-height: 100%;
          font-size: 48px;
          display: flex;
          align-items: end;
          justify-content: center;
        }
      }
      .motivation {
        p {
          color: white;
          font-size: 30px;
          text-align: justify;
        }
      }
    }
  }
  @media (max-width: 980px) {
    flex-direction: column;
    .profile-image {
      display: block;
      width: 100vw;
      height: 50vh;
      text-align: center;
      .image {
        border: 5px solid black;
        border-radius: 100%;
        width: 50%;
        height: 100%;
      }
    }
    .profile-about {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .basic-information {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
          font-size: 2.5em;
        }
        h4 {
          border: 1px solid red;
          color: #470219;
          font-size: 1%.5;
        }
      }
      .motivation {
      }
    }
  }
`;
