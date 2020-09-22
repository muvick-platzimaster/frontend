import React, { FC } from 'react'

/* Components */
import { Lists, ListsCard } from '../components'

import useFetchData from '../hooks/useFetchData'

const ListsContainer: FC = () => {
   const API_KEY = 'e5bbbe23be02b4a93f9a207728ca1844'
   const { data, loading } = useFetchData(`/movie/popular?api_key=${API_KEY}`)

   if (loading) {
      return <h1>Loading...</h1>
   }

   return (
      <Lists>
         {data?.results.map(({ id, title, backdrop_path: image }) => (
            <ListsCard
               key={id}
               title={title}
               image={`http://image.tmdb.org/t/p/w300/${image}`}
            />
         ))}
      </Lists>
   )
}

export default ListsContainer
