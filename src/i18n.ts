import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import Backend from 'i18next-xhr-backend'
// To load the translation files

i18n.on('languageChanged', function (lng) {
   localStorage.setItem('lng', lng)
})

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      debug: true,
      fallbackLng: 'en',
      whitelist: ['en', 'es'], // Array of abbrevations of the languages
      interpolation: {
         escapeValue: false
      },
      ns: ['translation'], // Names of the translation files

      detection: {
         order: ['localStorage'],
         lookupLocalStorage: 'lng',
         checkWhitelist: true
      },
      saveMissing: true,
      saveMissingTo: 'all'
   })

export default i18n
