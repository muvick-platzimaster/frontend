import { ADD_MOVIE_TO_MY_LIST } from './reducer'

/* types */
interface CreateActionsReturn {
   addMovieToMyList: (movieId: number | string) => void
}

interface Action {
   type: string
   payload: any
}

const createActions = (
   dispatch: ({ type, payload }: Action) => void
): CreateActionsReturn => {
   return {
      addMovieToMyList: (movieId) => {
         dispatch({ type: ADD_MOVIE_TO_MY_LIST, payload: movieId })
      }
   }
}

export default createActions
