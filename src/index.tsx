import React, { Suspense } from 'react'
import { render } from 'react-dom'

/* i18n  */
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

import App from './App'

render(
   <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
         <App />
      </I18nextProvider>
   </Suspense>,
   document.getElementById('root')
)
