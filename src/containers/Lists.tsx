import React, { FC } from 'react'

/* Components */
import { Lists, ListsCard } from '../components'

import useFetchData from '../hooks/useFetchData'

interface Data {
   id: number
   backdropPath: string
   title: string
}

const ListsContainer: FC = () => {
   const { data, loading } = useFetchData(
      'https://api.themoviedb.org/3/movie/popular?api_key=e5bbbe23be02b4a93f9a207728ca1844&language=en-US&page=1'
   )
   return (
      <Lists>
         {!loading &&
            data.results.map(({ id, title, backdropPath: image }: Data) => (
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
