import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import axios, { AxiosError } from 'axios'

/* styles */
import { Container, Video, IconContainer } from './styles/player'
import { ArrowRight } from '../Icons'
import { Videos } from '../../interfaces'

const Player = (): JSX.Element => {
   const match = useRouteMatch<{ id: string; isMovie: string }>(
      '/browse/:isMovie/:id'
   )
   const [videos, setVideos] = useState<Videos | null>(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<null | AxiosError>(null)
   const history = useHistory()

   const URL = `https://api.themoviedb.org/3/${match?.params.isMovie}/${match?.params.id}/videos?api_key=ad7bc0ccac5da809744fb1fe94ccd84c`

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

   const getVideos = (arrayVideos: Videos) => {
      const videos: string[] = []

      for (const video of arrayVideos.results) {
         videos.push(`https://www.youtube.com/embed/${video.key}?autoplay=1`)
      }

      return videos
   }

   if (error) return <h1>{error.message}</h1>

   if (loading || !match?.params || !videos) {
      return <h1>Loading...</h1>
   }

   return (
      <Container>
         <Video
            url={getVideos(videos)}
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
