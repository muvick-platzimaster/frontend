import { useState, useEffect } from 'react'
import { ApiResponse, MyList } from '../interfaces/'
import Axios, { Method } from 'axios'
import config from '../config'

type Data = ApiResponse | MyList | null
interface UseFetchDataReturn {
   data: Data
   loading: boolean
   error: Error | null
}

interface Options {
   headers: { Authorization: string }
   method: Method
   dependencies: Array<string | any>
}

const useFetchData = (
   API: string,
   options?: Partial<Options>
): UseFetchDataReturn => {
   const [data, setData] = useState<Data>(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const signal = Axios.CancelToken.source()
      setLoading(true)
      Axios({
         baseURL: config.API_URL_SERVER,
         url: API,
         headers: options?.headers || {},
         method: options?.method || 'GET',
         cancelToken: signal.token
      })
         .then(({ data }) => setData(data))
         .catch(setError)
         .finally(() => setLoading(false))
      return () => signal.cancel()
   }, options?.dependencies || [])

   return { data, loading, error }
}

export default useFetchData
