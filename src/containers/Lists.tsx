import React, { FC } from 'react'

/* Components */
import { Lists, ListsCard } from '../components'

import { results } from '../fixtures/lists.json'

const ListsContainer: FC = () => {
   return (
      <section>
         <Lists>
            {results.map(({ id, title, backdrop_path: image }) => (
               <ListsCard
                  key={id}
                  title={title}
                  image={`http://image.tmdb.org/t/p/w300/${image}`}
               />
            ))}
         </Lists>
      </section>
   )
}

export default ListsContainer
