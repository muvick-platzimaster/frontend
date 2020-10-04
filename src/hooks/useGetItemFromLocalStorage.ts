import { useEffect, useState } from 'react'

const useGetItemFromLocalStorage = (ITEM: string) => {
   const [item, setItem] = useState(() => {
      return localStorage.getItem(ITEM) || null
   })

   const setItemValue = () => {
      setItem(localStorage.getItem(ITEM) || null)
   }

   useEffect(() => {
      window.addEventListener('storage', setItemValue)
      return () => window.removeEventListener('storage', setItemValue)
   }, [])

   return [item]
}

export default useGetItemFromLocalStorage
