import { useState, useEffect } from 'react'

const useFetchData: any = (api: string) => {
   const [data, setData] = useState(false)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   useEffect(() => {
      setLoading(true)
      fetch(api)
         .then((res) => res.json())
         .then((response) => {
            setData(response)
            setLoading(false)
         })
         .catch((err) => setError(err))
   }, [])
   return { data, loading, error }
}

export default useFetchData
