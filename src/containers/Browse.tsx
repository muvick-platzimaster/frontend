import React, { FC, Fragment } from 'react'
import ProfilesContainer from './Profiles'
import { genres } from '../fixtures/genres.json'

/* Components */
import { Card } from '../components'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

const BrowseContainer: FC = () => {
   const API_KEY = 'e5bbbe23be02b4a93f9a207728ca1844'
   const { data, loading } = useFetchData(`/movie/popular?api_key=${API_KEY}`)
   return (
      <Fragment>
         <ProfilesContainer />
         <Card>
            {genres.map(({ id, name }) => (
               <Card.RowContainer key={id} genreId={id}>
                  <Card.Title>{name}</Card.Title>
                  <Card.Entities />
               </Card.RowContainer>
            ))}
         </Card>
      </Fragment>
   )
}

export default BrowseContainer
