import React, { FC } from 'react'

/* Components */
import { Lists, ListsCard } from '../components'

import useFetchData from '../hooks/useFetchData'

interface Data {
   id: string
   image: string
   title: string
}

const ListsContainer: FC = () => {
   const { data, loading, error } = useFetchData(
      'https://api.themoviedb.org/3/movie/popular?api_key=e5bbbe23be02b4a93f9a207728ca1844&language=en-US&page=1'
   )
   //    console.log(data, loading, error)
   return (
      <section>
         <Lists>
            {data &&
               data.results.map(({ id, title, image }: Data) => (
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
