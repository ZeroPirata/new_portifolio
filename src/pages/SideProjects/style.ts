import styled from 'styled-components'

export const BodyProjectsFilter = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .active-page {
    width: 150px;
  }
  .inactive-page {
    width: 150px;
  }

  .active-page a {
    border-color: var(--ColorDarkBlue);
  }

  .active-page a:hover {
    border-color: var(--ColorDarkBlue);
  }

  .inactive-page a {
    background-color: var(--ColorLightBlueOpacity);
  }

  .inactive-page a:hover {
    background-color: var(--ColorLightBlueOpacity);
  }
`
export const ContainerProjects = styled.div`
  height: 100%;
  width: 100%;
`
