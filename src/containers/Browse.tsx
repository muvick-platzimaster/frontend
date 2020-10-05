import React, { FC, Fragment, useContext, useEffect } from 'react'
import { genres } from '../fixtures/genres.json'

/* Components */
import { Card } from '../components'
import { SwitchContext } from '../context/SwitchContext'
import { useTranslation } from 'react-i18next'
import { MyListContext } from '../context/MyListContext'
import JwtDecode from 'jwt-decode'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'

const BrowseContainer: FC = () => {
   const { switchValue } = useContext(SwitchContext)
   const { t, i18n } = useTranslation(['browse'])
   const { actions } = useContext(MyListContext)
   useEffect(() => actions?.getMyList(), [])

   /* Si el token está vencido se elimina del localStorage lo que hace que se cierre la sesión actual */
   const token = localStorage.getItem(TOKEN) || ''
   const timestamp = JwtDecode<{ exp: number }>(token).exp * 1000

   if (new Date(timestamp) < new Date()) {
      localStorage.removeItem(TOKEN)
      localStorage.removeItem(VERIFY)
      window.location.reload()
   }

   return (
      <Fragment>
         <Card>
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
