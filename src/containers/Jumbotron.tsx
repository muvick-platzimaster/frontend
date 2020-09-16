import React, { FC } from 'react'

/* Components */
import { Jumbotron } from '../components'

import jumboData from '../fixtures/jumboData.json'

const JumbotronContainer: FC = () => {
   return (
      <section>
         {jumboData.map(({ id, title, subTitle, alt, direction, image }) => (
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
