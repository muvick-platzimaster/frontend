/* import Axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../../config'

export const ADD_MOVIE_TO_MY_LIST = 'ADD_MOVIE_TO_MY_LIST'
export const GET_MY_LIST = 'GET_MY_LIST'

const getMyList = (state) => {
   const [newState, setNewState] = useState(null)
   useEffect(() => {
      Axios({
         method: 'GET',
         baseURL: config.API_URL_SERVER,
         url: '/my-lists',
         headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` }
      })
         .then(({ data }) => {
            setNewState(data)
         })
         .catch(console.log)
   }, [])

   return { ...state, newState }
}

const reducers = (state = {}, action) => {
   switch (action.type) {
      case GET_MY_LIST:
         return getMyList(state)
      default:
         return state
   }
}

export default reducers */
