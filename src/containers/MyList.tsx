import React, { Fragment, useContext, useState } from 'react'

/* Components */
import { Wrapper, MyList, Nav } from '../components/'

/* Styles */
import { breakpoints } from '../styles/theme'

/* Interfaces */
import { MyList as MyListInterface } from '../interfaces/index'

/* Icons */
import Play from '../components/Icons/Play'
import Trash from '../components/Icons/Trash'
import Menu from '../components/Icons/Menu'

/* Containers */
import ModalContainer from '../containers/Modal'

/* i18n */
import { useTranslation } from 'react-i18next'

/* Context */
import { MyListContext } from '../context/MyListContext'
import { SwitchContext } from '../context/SwitchContext'

const MyListContainer = ({ movies }: MyListInterface): JSX.Element => {
   const { switchValue, setSwitchValue } = useContext(SwitchContext)
   const { actions } = useContext(MyListContext)
   const [show, setShow] = useState(false)
   const [movie, setMovie] = useState('')
   const { t } = useTranslation(['nav'])

   const showModal = (id: string) => {
      setMovie(id)
      setShow(true)
      toggleScrollLock()
   }

   const hideModal = () => {
      setShow(false)
      toggleScrollLock()
   }

   const toggleScrollLock = () => {
      document.querySelector('html')?.classList.toggle('scroll-lock')
   }

   const category = switchValue === 'movies' ? 'movie' : 'tv'

   return (
      <Fragment>
         <Wrapper maxWidth={breakpoints.responsive}>
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
         </Wrapper>

         <Wrapper maxWidth={breakpoints.responsive}>
            <h1> {t('mylist:title', 'My list')}</h1>
            <MyList>
               {movies.length > 0 ? (
                  <React.Fragment>
                     {' '}
                     {movies.map((item) => (
                        <MyList.Item key={item.id}>
                           <MyList.Image
                              src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                              alt={`Image of ${item.title} movie`}
                           />
                           <h2>
                              {item.title
                                 ? `${item.title.substring(0, 15)}`
                                 : `${item.name.substring(0, 15)}`}
                           </h2>
                           <div className="icons">
                              <div className="icons--play">
                                 <MyList.LinkButton
                                    to={`/browse/${category}/${item.id}`}
                                 >
                                    <Play />
                                 </MyList.LinkButton>

                                 <MyList.Button
                                    onClick={() => {
                                       actions?.removeMovieFromMyList({
                                          movieId: item.id,
                                          switchValue: switchValue || 'movies'
                                       })
                                    }}
                                 >
                                    <Trash />
                                 </MyList.Button>
                              </div>
                              <div className="icons--more">
                                 <MyList.Button
                                    onClick={() => showModal(`${item.id}`)}
                                 >
                                    <Menu />
                                 </MyList.Button>
                              </div>
                           </div>
                        </MyList.Item>
                     ))}
                  </React.Fragment>
               ) : (
                  t('mylist:nothing', 'No hay nada en tu lista.')
               )}
            </MyList>
            {show && (
               <ModalContainer
                  movieId={movie}
                  handleClose={hideModal}
                  type={switchValue}
               />
            )}
         </Wrapper>
      </Fragment>
   )
}

export default MyListContainer
