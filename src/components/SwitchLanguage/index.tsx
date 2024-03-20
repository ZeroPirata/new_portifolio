import React from 'react'
import { Button, Form } from 'react-bootstrap'
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
      <Form style={{ marginBottom: '10px' }}>
        <Form.Check
          type="switch"
          id="language-switch"
          label=""
          checked={currentLanguage === 'pt-BR'}
          onChange={() => handleLanguageChange(currentLanguage === 'pt-BR' ? 'en' : 'pt-BR')}
          style={{ display: 'none' }} // Oculta a bolinha padrão
        />
        <label htmlFor="language-switch" style={{
          backgroundColor: currentLanguage === 'pt-BR' ? '#009688' : '#001f3f',
          borderRadius: '30px',
          padding: '8px',
          cursor: 'pointer',
          display: 'inline-block',
        }}>
          <GiBrazilFlag style={{
            fontSize: '1.5em',
            color: currentLanguage === 'pt-BR' ? '#fff' : '#000',
            marginRight: '5px',
          }} />
          <GiUsaFlag style={{
            fontSize: '1.5em',
            color: currentLanguage === 'en' ? '#fff' : '#000',
            marginLeft: '5px',
          }} />
        </label>
      </Form>
    </div>
  )
}
