import React, { createContext, useReducer } from 'react'
/* import reducer from './reducer' */
import { Movie } from '../../interfaces'

/* Types */
interface MyList {
   movies: Movie[]
   series: Movie[]
}

interface MyListContext {
   myList: MyList
   getMyList: () => any
}

interface Props {
   children: React.ReactNode
}

/* My Context */
export const MyListContext = createContext<Partial<MyListContext>>({})

const MyListContextProvider = ({ children }: Props): JSX.Element => {
   const initialState = {
      movies: [],
      series: []
   }

   const [state] = useReducer(() => {
      return initialState
   }, initialState)
   /* const getMyList = () => {
      dispatch({ type: 'GET_MY_LIST' })
   } */
   return (
      <MyListContext.Provider value={{ myList: state }}>
         {children}
      </MyListContext.Provider>
   )
}

export default MyListContextProvider
