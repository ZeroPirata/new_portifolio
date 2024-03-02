import styled from 'styled-components'

export const ProjectSection = styled.section`
  margin: 1em 0;
  width: 100vw;

  h1 {
    font-size: 35px;
    color: var(--ColorLightBlue);
    font-weight: bold;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .block-list {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    margin: 1em 0;
  }

  .container-main {
    justify-content: space-evenly;
    height: 100%;
  }

  .container-images {
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    direction: rtl;
    height: 36em;
    overflow-y: auto;
  }
`
