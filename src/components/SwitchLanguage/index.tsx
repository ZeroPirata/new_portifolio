import React from 'react'
import { useTranslation } from 'react-i18next'
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <button
        style={{
          marginBottom: '5px',
          opacity: currentLanguage === 'pt-BR' ? 1 : 0.5,
          backgroundColor:
            currentLanguage === 'pt-BR' ? '#009688' : 'transparent',
          color: currentLanguage === 'pt-BR' ? '#fff' : '#000',
          borderRadius: '5px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        onClick={() => handleLanguageChange('pt-BR')}
      >
        Português <GiBrazilFlag />
      </button>
      <button
        style={{
          opacity: currentLanguage === 'en' ? 1 : 0.5,
          backgroundColor: currentLanguage === 'en' ? '#3f51b5' : 'transparent',
          color: currentLanguage === 'en' ? '#fff' : '#000',
          borderRadius: '5px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        onClick={() => handleLanguageChange('en')}
      >
        English <GiUsaFlag />
      </button>
    </div>
  )
}
