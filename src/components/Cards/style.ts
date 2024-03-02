import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

export const SCardProject: typeof Card = styled(Card)`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  .card-image {
    height: 250px;
  }
  .title {
    color: var(--ColorLightBlue);
    font-weight: bolder;
  }
`
