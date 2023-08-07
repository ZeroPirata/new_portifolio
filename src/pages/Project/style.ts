import {styled} from "styled-components";

export const ProjectsContainer: any = styled.section<{accentColor: string}>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
  }
  
  h1 {
    margin-top: 6vh;
    font-size: 4em;
    text-align: center;
    color: black;
    text-shadow: 4px 2px 2px #fff;
  }

  li {
    background-color: white;
  }

  body {
    --color: rgba(30, 30, 30);
    --bgColor: rgba(245, 245, 245);
    min-height: 100vh;
    display: grid;
    align-content: center;
    gap: 2rem;
    padding: 2rem;
    font-family: "Poppins", sans-serif;
    color: var(--color);
    background: var(--bgColor);
  }

  ul {
    --col-gap: 2rem;
    --row-gap: 2rem;
    --line-w: 0.25rem;
    display: grid;
    grid-template-columns: var(--line-w) 1fr;
    grid-auto-columns: max-content;
    column-gap: var(--col-gap);
    list-style: none;
    width: min(60rem, 90%);
    margin-inline: auto;
  }

  .company {
    display: flex;
    p {
      font-weight: bold;
      margin: 0 5px;
    }
  }

  .project-date > span {
    display: flex;
    p {
      font-weight: bold;
      margin: 0 5px;
    }
  }

  .descr {
    position: relative;
    overflow: hidden;
    max-height: 150px;
    span {
      font-weight: bold;
    }
  }

  .see-more {
    align-items: center;
    display: flex;
    justify-content: center;
    button {
      background-color: transparent;
      font-size: 1.5em;
    }
    button:hover {
      color: red;
    }
  }

  ul::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: rgb(225, 225, 225);
    border-radius: calc(var(--line-w) / 2);
  }

  ul li:not(:last-child) {
    margin-bottom: var(--row-gap);
  }

  ul li {
    grid-column: 2;
    --inlineP: 1.5rem;
    margin-inline: var(--inlineP);
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;
  }

  ul li .date {
    --dateH: 3rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);
    text-align: center;
    background-color: ${(props) => props.accentColor};
    font-size: 1.25rem;
    font-weight: 700;
    display: grid;
    place-content: center;
    position: relative;
    border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
  }

  ul li .date::before {
    content: "";
    width: var(--inlineP);
    aspect-ratio: 1;
    background: ${(props) => props.accentColor};
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
    position: absolute;
    top: 100%;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
  }

  ul li .date::after {
    content: "";
    position: absolute;
    width: 2rem;
    aspect-ratio: 1;
    background: var(--bgColor);
    border: 0.3rem solid ${(props) => props.accentColor};
    border-radius: 50%;
    top: 50%;
    background-color: white;
    transform: translate(50%, -50%);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }

  ul li .title,
  ul li .descr {
    background: var(--bgColor);
    position: relative;
    padding-inline: 1.5rem;
  }
  ul li .title {
    overflow: hidden;
    padding-block-start: 1.5rem;
    padding-block-end: 0.25rem;
    font-weight: 500;
  }
  ul li .descr {
    padding-block-end: 1.5rem;
    font-weight: 300;
  }

  ul li .title::before,
  ul li .descr::before {
    content: "...";
    position: absolute;
    width: 90%;
    height: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    left: 50%;
    border-radius: 50%;
    filter: blur(4px);
    transform: translate(-50%, 50%);
  }
  ul li .title::before {
    bottom: calc(100% + 0.125rem);
  }

  ul li .descr::before {
    z-index: -1;
    bottom: 0.25rem;
  }

  @media (min-width: 40rem) {
    ul {
      grid-template-columns: 1fr var(--line-w) 1fr;
    }
    ul::before {
      grid-column: 2;
    }
    ul li:nth-child(odd) {
      grid-column: 1;
    }
    ul li:nth-child(even) {
      grid-column: 3;
    }

    ul li:nth-child(2) {
      grid-row: 2/4;
    }

    ul li:nth-child(odd) .date::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }

    ul li:nth-child(odd) .date::after {
      transform: translate(-50%, -50%);
      left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }
    ul li:nth-child(odd) .date {
      border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
    }
  }
`;
