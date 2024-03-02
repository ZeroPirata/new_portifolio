type SocialMediaProfileType = 'NetWork' | 'Email'
export interface ISocialIcons {
  name: string
  linkIcon: string
  width?: number
  height?: number
  backgroundColor: string
  iconColor: string
  type: SocialMediaProfileType
}

export interface SocialMediaProfile {
  type: SocialMediaProfileType
  socialName: string
  url: string
}
