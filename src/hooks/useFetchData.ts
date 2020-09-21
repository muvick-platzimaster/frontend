import { useState, useEffect } from 'react'
import { ApiResponse } from '../interfaces/'

interface UseFetchDataReturn {
   data: ApiResponse | null
   loading: boolean
   error: Error | null
}

const useFetchData = (api: string): UseFetchDataReturn => {
   const [data, setData] = useState<ApiResponse | null>(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const abortController = new AbortController()
      setLoading(true)
      fetch(api, { method: 'GET', signal: abortController.signal })
         .then((res) => res.json())
         .then((response: ApiResponse) => {
            setData(response)
            setLoading(false)
         })
         .catch((err) => setError(err))

      return () => abortController.abort()
   }, [])
   return { data, loading, error }
}

export default useFetchData
