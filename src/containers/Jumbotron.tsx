import React, { FC, useState, useEffect } from 'react'

/* Components */
import { Jumbotron } from '../components'

import jumboData from '../fixtures/jumboData.json'

/* i18n */
import { useTranslation } from 'react-i18next'

const JumbotronContainer: FC = () => {
   const { i18n } = useTranslation(['footer'])
   const [jumbo, setJumbo] = useState(jumboData.english)

   useEffect(() => {
      if (i18n.language === 'es') {
         setJumbo(jumboData.spanish)
      } else if (i18n.language === 'en') {
         setJumbo(jumboData.english)
      }
   }, [i18n.language])

   return (
      <section>
         {jumbo.map(({ id, title, subTitle, alt, direction, image }) => (
            <Jumbotron
               key={id}
               direction={direction}
               title={title}
               subTitle={subTitle}
               image={image}
               alt={alt}
            />
         ))}
      </section>
   )
}

export default JumbotronContainer
