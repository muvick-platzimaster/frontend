import React, { FC } from 'react'

import { Wrapper } from '../components/'

import { breakpoints } from '../styles/theme'

/* Interfaces */
import { MyList as MyListInterface } from '../interfaces/index'

import { MyList } from '../components'

import Play from '../components/Icons/Play'

const MyListContainer: FC = ({ movies }: MyListInterface) => {
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
                  <h2>{item.original_title}</h2>
                  <div className="icons">
                     <div className="icons--play">
                        <Play />
                        <Play />
                     </div>
                     <div className="icons--more">
                        <Play />
                     </div>
                  </div>
               </MyList.Item>
            ))}
         </MyList>
      </Wrapper>
   )
}

export default MyListContainer
