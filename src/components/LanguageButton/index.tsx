import React, { FC } from 'react'

/* Styles */
import { Button } from './styles'

/* i18n */
import { useTranslation } from 'react-i18next'

const LanguageButton: FC = () => {
   const { i18n } = useTranslation(['footer'])
   const changeLanguage = (code: string) => {
      i18n.changeLanguage(code)
   }

   const handleLanguage = () => {
      if (i18n.language === 'es') {
         changeLanguage('en')
      } else if (i18n.language === 'en') {
         changeLanguage('es')
      }
      return true
   }

   return (
      <Button
         type="button"
         onClick={() => {
            handleLanguage()
            window.location.reload()
         }}
      >
         {i18n.language === 'en' ? 'Es' : 'En'}
      </Button>
   )
}

export default LanguageButton
