import React, { FC, Fragment } from 'react'
import { genres } from '../fixtures/genres.json'

/* Components */
import { Card } from '../components'

const BrowseContainer: FC = () => {
   return (
      <Fragment>
         <Card>
            {genres.map(({ id, name }) => (
               <Card.RowContainer key={id} genreId={id}>
                  <Card.Title>{name}</Card.Title>
                  <Card.Entities genre={name} />
               </Card.RowContainer>
            ))}
         </Card>
      </Fragment>
   )
}

export default BrowseContainer
