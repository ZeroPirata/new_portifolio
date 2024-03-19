import Profile from './profile'
import Projects from './projects'
import Skills from './Skills'
import SideProjects from './SideProjects'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from 'components'

const Leading = () => {
  return (
    <>
      <LanguageSwitcher />
      <Profile />
      <Projects />
      <Skills />
      <SideProjects />
    </>
  )
}

export default Leading
