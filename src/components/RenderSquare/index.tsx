import React from 'react'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import { imagePathResolve } from 'utils/imageresolver'

interface Props {
  imagens: string
}

const StyleRender = styled(Image)`
  margin: 1em 0;
  padding-left: 1em;
  border-radius: 10px;
  background-color: var(--ColorBlue);
`

export const RenderSquareProject: React.FC<Props> = ({ imagens }) => {
  const profilePictureRender = imagePathResolve(imagens)
  return <StyleRender fluid src={profilePictureRender} />
}
