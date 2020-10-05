import React, { createContext } from 'react'
import useAsyncReducer from '../../hooks/useAsyncReducer'
import reducer from './reducer'
import createActions from './createActions'
import { Movie } from '../../interfaces'

/* Types */
interface MyList {
   movies: Movie[]
   series: Movie[]
}

interface MyListContext {
   state: MyList
   actions: {
      addMovieToMyList: ({
         movieId,
         switchValue
      }: {
         movieId: number | string
         switchValue: string
      }) => void
      removeMovieFromMyList: ({
         movieId,
         switchValue
      }: {
         movieId: number | string
         switchValue: string
      }) => void
      getMyList: () => void
   }
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

   const [state, dispatch] = useAsyncReducer(reducer, initialState)
   const actions = createActions(dispatch)

   return (
      <MyListContext.Provider value={{ state, actions }}>
         {children}
      </MyListContext.Provider>
   )
}

export default MyListContextProvider
