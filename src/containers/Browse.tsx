import React, { FC, Fragment, useContext } from 'react'
import { genres } from '../fixtures/genres.json'

/* Components */
import { Card } from '../components'
import { SwitchContext } from '../context/SwitchContext'
import { useTranslation } from 'react-i18next'

const BrowseContainer: FC = () => {
   const { switchValue } = useContext(SwitchContext)
   const { i18n } = useTranslation(['header'])

   return (
      <Fragment>
         <Card>
            {/* FIXME: Poner en español e inglés */}
            <Card.RowContainer API="/my-lists">
               <Card.Title>My List</Card.Title>{' '}
               <Card.Entities genre="my-list" />
            </Card.RowContainer>

            <Card.RowContainer API={`/${switchValue}/popular`}>
               <Card.Title>Popular</Card.Title>{' '}
               <Card.Entities genre="popular" />
            </Card.RowContainer>

            {genres.map(({ id, name }) => (
               <Card.RowContainer
                  key={id}
                  API={`/${switchValue}?genre=${id}&language=${i18n.language}`}
               >
                  <Card.Title>{name}</Card.Title>
                  <Card.Entities genre={name} />
               </Card.RowContainer>
            ))}
         </Card>
      </Fragment>
   )
}

export default BrowseContainer
