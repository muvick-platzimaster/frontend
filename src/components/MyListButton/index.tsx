import React from 'react'
/* import Axios, { AxiosError } from 'axios' */

/* Styles */
import { Button } from './styles'

const MyListButton = (/* { switchValue, id } */): JSX.Element => {
   /* const [myList, setMyList] = useState([])
   const [error, setError] = useState<AxiosError | null>(null) */

   const handleMyList = () => {
      /* Axios({
         baseURL: 'http://localhost:5000',
         url: `/${switchValue}/${id}`,
         headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
         method: 'POST'
      })
         .then(({ data }) => {
            setMyList(data)
         })
         .catch((err: AxiosError) => {
            setError(err)
         }) */
   }

   return (
      <Button
         type="button"
         onClick={() => {
            handleMyList()
         }}
      >
         +
      </Button>
   )
}

export default MyListButton
