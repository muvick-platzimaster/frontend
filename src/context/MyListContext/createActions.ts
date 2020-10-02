import { ADD_MOVIE_TO_MY_LIST, REMOVE_MOVIE_FROM_MY_LIST } from './reducer'

/* types */
interface CreateActionsReturn {
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
}

interface Action {
   type: string
   payload: any
}

const createActions = (
   dispatch: ({ type, payload }: Action) => void
): CreateActionsReturn => {
   return {
      addMovieToMyList: ({ movieId, switchValue }) => {
         dispatch({
            type: ADD_MOVIE_TO_MY_LIST,
            payload: { movieId, switchValue }
         })
      },
      removeMovieFromMyList: ({ movieId, switchValue }) => {
         dispatch({
            type: REMOVE_MOVIE_FROM_MY_LIST,
            payload: { movieId, switchValue }
         })
      }
   }
}

export default createActions
