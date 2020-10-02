import { useEffect, useState } from 'react'

interface useGetToken {
   token: string | null
}

const useGetToken = (): useGetToken => {
   const [token, setToken] = useState(() => {
      return localStorage.getItem('TOKEN') || null
   })
   useEffect(() => {
      window.addEventListener('storage', () => {
         setToken(localStorage.getItem('TOKEN') || null)
      })

      return () =>
         window.removeEventListener('storage', () => {
            setToken(localStorage.getItem('TOKEN') || null)
         })
   }, [])

   return { token }
}

export default useGetToken
