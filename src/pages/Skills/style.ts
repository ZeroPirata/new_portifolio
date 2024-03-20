import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const ContainerStyld = styled(Container).attrs({
  fluid: true
})`
  h1,
  h3 {
    color: #fff;
    font-weight: bold;
  }
  padding: 2em 0;
  background-color: var(--ColorMiddleBlue);
  .col-12-text {
    text-align: center;
  }

  .skills-container {
    margin: 1em 0;
    padding: 1em;
    border-radius: 25px;
    background: linear-gradient(
      180deg,
      #010b40 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    box-shadow: 0px 5px 3px 5px rgba(0, 0, 0, 0.5);
    height: 20em;
    overflow: auto;
    color: #fff;
    li {
      color: inherit;
    }
  }
`
