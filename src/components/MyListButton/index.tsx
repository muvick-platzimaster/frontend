import React, { FC } from 'react'

/* Styles */
import { Button } from './styles'

const MyListButton: FC = ({ switchValue, id }: any) => {
   const handleMyList = () => {
      const API = `/${switchValue}/${id}`
      const headers = {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
      }
      const method = 'POST'
      const BASE_URL = 'http://localhost:5000'

      const abortController = new AbortController()
      fetch(`${BASE_URL}${API}`, {
         headers,
         method,
         signal: abortController.signal
      })
         .then((res) => res.json())
         .then((response) => {
            return response
         })
         .catch((err) => err)
      return () => abortController.abort()
   }

   return (
      <Button type="button" onClick={() => handleMyList()}>
         +
      </Button>
   )
}

export default MyListButton
