import { useState, useEffect } from 'react'

const useFetchData = (
   api: string
): { data: any; loading: boolean; error: Error | null } => {
   const [data, setData] = useState(false)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

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
