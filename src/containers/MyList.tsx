import React, { FC, useContext, useState } from 'react'

import { Wrapper } from '../components/'

import { breakpoints } from '../styles/theme'

/* Interfaces */
import { MyList as MyListInterface } from '../interfaces/index'

import { MyList } from '../components'

import Play from '../components/Icons/Play'
import Trash from '../components/Icons/Trash'
import Menu from '../components/Icons/Menu'

import ModalContainer from '../containers/Modal'

/* Context */
import { MyListContext } from '../context/MyListContext'
import { SwitchContext } from '../context/SwitchContext'

const MyListContainer: FC = ({ movies }: MyListInterface) => {
   const { switchValue } = useContext(SwitchContext)
   const { actions } = useContext(MyListContext)
   const [show, setShow] = useState(false)
   const [movie, setMovie] = useState('')

   const showModal = (id) => {
      setMovie(id)
      setShow(true)
      toggleScrollLock()
   }

   const hideModal = () => {
      setShow(false)
      toggleScrollLock()
   }

   const toggleScrollLock = () => {
      document.querySelector('html').classList.toggle('scroll-lock')
   }

   return (
      <Wrapper maxWidth={breakpoints.responsive}>
         <h1>My list</h1>
         <MyList>
            {movies.map((item) => (
               <MyList.Item key={item.id}>
                  <MyList.Image
                     src={`http://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                     alt=""
                  />
                  <h2>
                     {item.title
                        ? `${item.title.substring(0, 15)}`
                        : `${item.name.substring(0, 15)}`}
                  </h2>
                  <div className="icons">
                     <div className="icons--play">
                        <MyList.LinkButton
                           to={`/browse/${switchValue}/${item.id}`}
                        >
                           <Play />
                        </MyList.LinkButton>

                        <MyList.Button
                           onClick={() => {
                              actions.removeMovieFromMyList({
                                 movieId: item.id,
                                 switchValue
                              })
                           }}
                        >
                           <Trash />
                        </MyList.Button>
                     </div>
                     <div className="icons--more">
                        <MyList.Button onClick={() => showModal(item.id)}>
                           <Menu />
                        </MyList.Button>
                     </div>
                  </div>
               </MyList.Item>
            ))}
         </MyList>
         {show && (
            <ModalContainer
               movieId={movie}
               handleClose={hideModal}
               type={switchValue}
            />
         )}
      </Wrapper>
   )
}

export default MyListContainer
