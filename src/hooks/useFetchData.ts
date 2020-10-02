import { useState, useEffect } from 'react'
import { ApiResponse, MyList } from '../interfaces/'
import Axios, { Method } from 'axios'

type Data = ApiResponse | MyList | null
interface UseFetchDataReturn {
   data: Data
   loading: boolean
   error: Error | null
}

const useFetchData = (
   API: string,
   headers = {},
   method: Method = 'GET'
): UseFetchDataReturn => {
   const [data, setData] = useState<Data>(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const signal = Axios.CancelToken.source()
      setLoading(true)
      Axios({
         baseURL: 'http://localhost:5000',
         url: API,
         headers,
         method,
         cancelToken: signal.token
      })
         .then(({ data }) => setData(data))
         .catch((err) => setError(err))
         .finally(() => setLoading(false))
      return () => signal.cancel()
   }, [])

   return { data, loading, error }
}

export default useFetchData
