import React, { FC, useContext, useEffect } from 'react'
import { genres } from '../fixtures/genres.json'

/* Components */
import { Card, Nav } from '../components'
import { SwitchContext } from '../context/SwitchContext'
import { useTranslation } from 'react-i18next'
import { MyListContext } from '../context/MyListContext'
import JwtDecode from 'jwt-decode'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'

const BrowseContainer: FC = () => {
   const { switchValue, setSwitchValue } = useContext(SwitchContext)
   const { t, i18n } = useTranslation(['browse', 'card', 'nav'])
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
      <Card>
         <Nav.Text>{t('nav:whatdoyousee')}</Nav.Text>
         <Nav.SwitchButton
            className={switchValue === 'movies' ? 'active' : ''}
            onClick={() => {
               setSwitchValue && setSwitchValue('movies')
            }}
         >
            {t('nav:movies', 'Movies')}
         </Nav.SwitchButton>
         <Nav.SwitchButton
            className={switchValue === 'series' ? 'active' : ''}
            onClick={() => {
               setSwitchValue && setSwitchValue('series')
            }}
         >
            {t('nav:tvshows', 'TV Shows')}
         </Nav.SwitchButton>
         <Card.RowContainer API={`/my-lists?language=${i18n.language}`}>
            <Card.Title>{t('browse:mylist', 'My List')}</Card.Title>{' '}
            <Card.Entities genre="my-list" />
         </Card.RowContainer>

         <Card.RowContainer
            API={`/${switchValue}/popular?language=${i18n.language}`}
         >
            <Card.Title>{t('browse:popular', 'Popular')}</Card.Title>{' '}
            <Card.Entities genre="popular" />
         </Card.RowContainer>

         {genres.map(({ id, name }) => (
            <Card.RowContainer
               key={id}
               API={`/${switchValue}?genre=${id}&language=${i18n.language}`}
            >
               <Card.Title>{t(`card:${name}`, `${name}`)}</Card.Title>
               <Card.Entities genre={name} />
            </Card.RowContainer>
         ))}
      </Card>
   )
}

export default BrowseContainer
