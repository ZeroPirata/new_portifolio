import { ISocialIcons } from 'interfaces/socialicons'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export const SocialIcons: React.FC<ISocialIcons> = (props: ISocialIcons) => {
  const [hovered, setHovered] = useState(false)

  const handleMouseToggle = (isHovered: boolean) => {
    setHovered(isHovered)
  }

  const iconStyles = {
    borderColor: hovered ? '#8C7F77' : 'white',
    fgColor: hovered ? '#8C7F77' : props.iconColor,
    transition: 'border-color 0.3s ease, fill 0.3s ease',
    borderRadius: '50px',
    border: '3px solid white',
  }

  switch (props.type) {
    case 'NetWork':
      return (
        <div
          className="social-icon"
          onMouseEnter={() => handleMouseToggle(true)}
          onMouseLeave={() => handleMouseToggle(false)}
        >
          <SocialIcon
            bgColor={props.backgroundColor}
            fgColor={hovered ? '#8C7F77' : props.iconColor}
            network={props.name}
            label={props.name}
            as="a"
            url={props.linkIcon}
            target="_blank"
            style={iconStyles}
          />
        </div>
      )
    case 'Email':
      return (
        <div
          className="social-icon"
          onMouseEnter={() => handleMouseToggle(true)}
          onMouseLeave={() => handleMouseToggle(false)}
        >
          <SocialIcon
            bgColor={props.backgroundColor}
            fgColor={hovered ? '#8C7F77' : props.iconColor}
            network={props.name}
            label={props.name}
            as="a"
            target="_blank"
            href={`mailto:${props.linkIcon}`}
            style={iconStyles}
          />
        </div>
      )
    default:
      return null
  }
}
