import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import axios, { AxiosError } from 'axios'

/* styles */
import { Container, Video, IconContainer } from './styles/player'
import { ArrowRight } from '../Icons'

const Player = (): JSX.Element => {
   const match = useRouteMatch('/browse/movie/:id')
   const [videos, setVideos] = useState<any>({ id: 0, results: [] })
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<null | AxiosError>(null)
   const history = useHistory()

   const URL = `https://api.themoviedb.org/3/movie/${match?.params.id}/videos?api_key=ad7bc0ccac5da809744fb1fe94ccd84c`

   useEffect(() => {
      setLoading(true)
      axios({
         url: URL,
         method: 'GET'
      })
         .then(({ data }) => setVideos(data))
         .catch(setError)
         .finally(() => setLoading(false))
   }, [])

   if (error) return <h1>{error.message}</h1>
   if (loading || !match?.params || !videos.results[0].key) {
      return <h1>Loading...</h1>
   }

   return (
      <Container>
         <Video
            url={`https://www.youtube.com/embed/${videos.results[0].key}?autoplay=1`}
            controls={true}
            playing={true}
            width="100%"
            height="100%"
         />
         <IconContainer onClick={() => history.goBack()}>
            <ArrowRight
               color="white"
               width="100%"
               height="100%"
               transform="rotate(180)"
            />
         </IconContainer>
      </Container>
   )
}

export default Player
