import React, { createContext, useContext, useEffect, useState } from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Movie } from '../../interfaces'

/* Styles */
import {
   Container,
   Title,
   RowContainer,
   Entities,
   Subtitle,
   Text,
   Image,
   Item,
   Details
} from './styles/card'

/* Types */
type PropsWithChildren = { children: React.ReactNode }
type PropsImage = React.ImgHTMLAttributes<HTMLImageElement>
interface PropsItem {
   children: React.ReactNode
   item: Movie
}
interface Context {
   showFeature: boolean
   setShowFeature: React.Dispatch<React.SetStateAction<boolean>>
   itemFeature: Movie | null
   setItemFeature: React.Dispatch<React.SetStateAction<Movie | null>>
   movies: Movie[]
}

interface PropsRowContainer {
   children: React.ReactNode
   genreId: number | string
}

/* Card Component */

const FeatureContext = createContext<Partial<Context>>({})

const Card = ({ children }: PropsWithChildren): JSX.Element => {
   return <Container>{children}</Container>
}

Card.Title = function CardTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

Card.RowContainer = function CardRowContainer({
   children,
   genreId
}: PropsRowContainer) {
   const [showFeature, setShowFeature] = useState<boolean>(false)
   const [itemFeature, setItemFeature] = useState<Movie | null>(null)

   const API_KEY = 'e5bbbe23be02b4a93f9a207728ca1844'

   const { data } = useFetchData(
      `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
   )

   return (
      <FeatureContext.Provider
         value={{
            showFeature,
            setShowFeature,
            itemFeature,
            setItemFeature,
            movies: data?.results
         }}
      >
         <RowContainer>{children}</RowContainer>
      </FeatureContext.Provider>
   )
}

Card.Entities = function CardEntities() {
   const { movies } = useContext(FeatureContext)

   return (
      <Entities>
         {movies?.map((movie) => (
            <Card.Item key={movie.id} item={movie}>
               <Card.Image
                  src={`http://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
                  hidden={!movie.backdrop_path}
               />
            </Card.Item>
         ))}
      </Entities>
   )
}

Card.Item = function CardItem({ children, item }: PropsItem) {
   const { setItemFeature, setShowFeature } = useContext(FeatureContext)
   return (
      <Item
         onClick={() => {
            setItemFeature && setItemFeature(item)
            setShowFeature && setShowFeature(true)
         }}
      >
         {children}
      </Item>
   )
}

Card.Image = function CardImage({ ...restProps }: PropsImage) {
   return <Image {...restProps} />
}

Card.Details = function CardDetails({ children }: PropsWithChildren) {
   return <Details>{children}</Details>
}

Card.Subtitle = function CardSubtitle({ children }: PropsWithChildren) {
   return <Subtitle>{children}</Subtitle>
}

Card.Text = function CardText({ children }: PropsWithChildren) {
   return <Text>{children}</Text>
}

export default Card
