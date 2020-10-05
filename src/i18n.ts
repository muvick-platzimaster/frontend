import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'

i18n.on('languageChanged', function (lng) {
   localStorage.setItem('lng', lng)
})

i18n
   .use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      debug: false,
      fallbackLng: 'en',
      whitelist: ['en', 'es'],
      interpolation: {
         escapeValue: false
      },
      ns: ['translation'],

      detection: {
         order: ['localStorage'],
         lookupLocalStorage: 'lng',
         checkWhitelist: true
      },
      saveMissing: true,
      saveMissingTo: 'all'
   })

export default i18n
