import { useState, useEffect } from 'react'
import { ApiResponse, MovieDetails, MyList } from '../interfaces/'
import Axios, { AxiosError, Method } from 'axios'
import config from '../config'

type Data = ApiResponse | MyList | null | MovieDetails
interface UseFetchDataReturn {
   data: Data
   loading: boolean
   error: Error | null
}

interface Options {
   headers: { Authorization: string }
   method: Method
   dependencies: Array<string | any>
   initialState: any
}

const useFetchData = (
   API: string,
   options?: Partial<Options>
): UseFetchDataReturn => {
   const [data, setData] = useState<Data>(options?.initialState || null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<null | AxiosError>(null)

   useEffect(() => {
      const source = Axios.CancelToken.source()
      setLoading(true)
      Axios({
         baseURL: config.API_URL_SERVER,
         url: API,
         headers: options?.headers || {},
         method: options?.method || 'GET',
         cancelToken: source.token
      })
         .then(({ data }) => setData(data))
         .catch((err: AxiosError) => {
            if (Axios.isCancel(err)) {
            } else {
               setError(err)
            }
         })
         .finally(() => setLoading(false))
      return () => source.cancel()
   }, options?.dependencies || [])

   return { data, loading, error }
}

export default useFetchData
