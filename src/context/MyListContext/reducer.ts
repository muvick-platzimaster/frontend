/* eslint-disable indent */
import Axios from 'axios'
import config from '../../config'

/* Types */
interface Actions {
   type: string
   payload: { movieId: string | number; switchValue: string }
}

export const ADD_MOVIE_TO_MY_LIST = 'ADD_MOVIE_TO_MY_LIST'
export const REMOVE_MOVIE_FROM_MY_LIST = 'REMOVE_MOVIE_FROM_MY_LIST'
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
               url: `/${payload.switchValue}/${payload.movieId}`,
               method: 'POST',
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
               }
            }).then(({ data }) => resolve(data))

            break
         case REMOVE_MOVIE_FROM_MY_LIST:
            Axios({
               baseURL: config.API_URL_SERVER,
               url: `/${payload.switchValue}/${payload.movieId}`,
               method: 'DELETE',
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
               }
            }).then(({ data }) => resolve(data))
            break

         case GET_MY_LIST:
            Axios({
               baseURL: config.API_URL_SERVER,
               url: '/my-lists',
               method: 'GET',
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
