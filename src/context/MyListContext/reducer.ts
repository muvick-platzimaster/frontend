import Axios from 'axios'
import config from '../../config'

/* Types */
interface Actions {
   type: string
   payload: any
}

export const ADD_MOVIE_TO_MY_LIST = 'ADD_MOVIE_TO_MY_LIST'
export const GET_MY_LIST = 'GET_MY_LIST'

const initialState = {
   movies: [],
   series: []
}

const reducer = (
   state = initialState,
   { type, payload }: Actions
): Promise<any> => {
   return new Promise((resolve) => {
      switch (type) {
      case ADD_MOVIE_TO_MY_LIST:
         Axios({
            baseURL: config.API_URL_SERVER,
            url: `/movies/${payload}`,
            method: 'POST',
            headers: {
               Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
            }
         }).then(({ data }) => resolve(data))

         break
      default: {
         return state
      }
      }
   })
}

export default reducer
