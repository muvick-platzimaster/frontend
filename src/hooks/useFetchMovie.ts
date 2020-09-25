import { useState, useEffect } from 'react'
import { MovieDetails } from '../interfaces/'

interface UseFetchMovieReturn {
   data: MovieDetails | null
   loading: boolean
   error: Error | null
}

const useFetchMovie = (API: string): UseFetchMovieReturn => {
   const BASE_URL = 'https://api.themoviedb.org/3'

   const [data, setData] = useState<MovieDetails | null>(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const abortController = new AbortController()
      setLoading(true)
      fetch(`${BASE_URL}${API}`, {
         method: 'GET',
         signal: abortController.signal
      })
         .then((res) => res.json())
         .then((response: MovieDetails) => {
            setData(response)
            setLoading(false)
         })
         .catch((err) => setError(err))

      return () => abortController.abort()
   }, [])
   return { data, loading, error }
}

export default useFetchMovie
