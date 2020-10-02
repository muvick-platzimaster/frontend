import React, { useContext } from 'react'

/* Components */
import { Footer } from '../components'

/* Containers */
import NavContainer from '../containers/Nav'
import MyListContainer from '../containers/MyList'

/* Context */
import { SwitchContext } from '../context/SwitchContext'

/* Hooks */
import useFetchData from '../hooks/useFetchData'

/* Interfaces */
import { MyList as MyListInterface } from '../interfaces/index'

function MyList(): JSX.Element {
   const { switchValue } = useContext(SwitchContext)
   const headers = { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` }
   const API = '/my-lists'

   const { data } = useFetchData(API, {
      headers,
      dependencies: [switchValue]
   })

   const movies =
      switchValue === 'movies'
         ? (data as MyListInterface)?.movies || []
         : (data as MyListInterface)?.series || []

   return (
      <>
         <NavContainer />
         <MyListContainer movies={movies}>Hola</MyListContainer>
         <Footer />
      </>
   )
}

export default MyList
