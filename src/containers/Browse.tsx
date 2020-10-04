import React, { FC, Fragment, useContext, useEffect } from 'react'
import { genres } from '../fixtures/genres.json'

/* Components */
import { Card } from '../components'
import { SwitchContext } from '../context/SwitchContext'
import { useTranslation } from 'react-i18next'
import { MyListContext } from '../context/MyListContext'

const BrowseContainer: FC = () => {
   const { switchValue } = useContext(SwitchContext)
   const { t, i18n } = useTranslation(['browse'])
   const { actions } = useContext(MyListContext)
   useEffect(() => actions?.getMyList(), [])

   return (
      <Fragment>
         <Card>
            {/* FIXME: Poner en español e inglés */}
            <Card.RowContainer API="/my-lists">
               <Card.Title>{t('browse:mylist', 'My List')}</Card.Title>{' '}
               <Card.Entities genre="my-list" />
            </Card.RowContainer>

            <Card.RowContainer API={`/${switchValue}/popular`}>
               <Card.Title>{t('browse:popular', 'Popular')}</Card.Title>{' '}
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
