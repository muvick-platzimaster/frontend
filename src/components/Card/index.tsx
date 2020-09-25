import React, {
   createContext,
   useContext,
   useEffect,
   useRef,
   useState
} from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Movie } from '../../interfaces'

/* Components */

import { Feature } from '../'

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
   Details,
   Page,
   ToPage,
   ImageContainer
} from './styles/card'
import { Spinner } from '../Icons'

/* Types */
type PropsWithChildren = { children: React.ReactNode }
type PropsImage = React.ImgHTMLAttributes<HTMLImageElement>
interface PropsItem {
   children: React.ReactNode
   item: Movie
}
interface FeatureContext {
   showFeature: boolean
   setShowFeature: React.Dispatch<React.SetStateAction<boolean>>
   itemFeature: Movie | null
   setItemFeature: React.Dispatch<React.SetStateAction<Movie | null>>
   movies: Movie[]
}

interface MovieContext {
   movies: Movie[]
}

interface PropsRowContainer {
   children: React.ReactNode
   genreId: number | string
}

/* Card Component */

const FeatureContext = createContext<Partial<FeatureContext>>({})
const MovieContext = createContext<Partial<MovieContext>>({})

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
   const { data, loading } = useFetchData(`/movies?genre=${genreId}`)

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
         <RowContainer>
            {loading ? <Spinner color="white" /> : children}
         </RowContainer>
      </FeatureContext.Provider>
   )
}

Card.Entities = function CardEntities({ genre }: { genre: string }) {
   const { movies } = useContext(FeatureContext)
   const ref = useRef<HTMLDivElement | null>(null)
   const [scrollWidth, setscrollWidth] = useState(
      ref?.current?.offsetWidth || 0
   )

   useEffect(() => {
      setscrollWidth(ref?.current?.offsetWidth || 0)
      window.addEventListener('resize', () => {
         setscrollWidth(ref?.current?.offsetWidth || 0)
      })

      return () =>
         window.removeEventListener('resize', () => {
            setscrollWidth(ref?.current?.offsetWidth || 0)
         })
   }, [])

   const handleClickNext = () => {
      if (ref.current) {
         /* ref.current?.scrollLeft = scrollWidth */
         ref.current.scrollLeft += scrollWidth
      }
   }

   const handleClickPrevious = () => {
      if (ref.current) {
         /* ref.current?.scrollLeft = scrollWidth */
         ref.current.scrollLeft -= scrollWidth
      }
   }

   return (
      <>
         <Page>
            <Entities ref={ref}>
               <ToPage onClick={handleClickPrevious}>&laquo;</ToPage>
               {movies?.map((movie) => {
                  const { id, poster_path: poster } = movie
                  return (
                     <Card.Item key={`${genre}-${id}`} item={movie}>
                        <ImageContainer>
                           <Card.Image
                              src={
                                 poster
                                    ? `http://image.tmdb.org/t/p/w400/${poster}`
                                    : 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
                              }
                           />
                        </ImageContainer>
                     </Card.Item>
                  )
               })}
               <ToPage onClick={handleClickNext}>&raquo;</ToPage>
            </Entities>
         </Page>
         <Card.Feature />
      </>
   )
}

Card.Page = function CardPage({ children }: PropsWithChildren) {
   return <Page>{children}</Page>
}

Card.Item = function CardItem({ children, item, ...restProps }: PropsItem) {
   const { setItemFeature, setShowFeature } = useContext(FeatureContext)
   return (
      <Item
         onClick={() => {
            setItemFeature && setItemFeature(item)
            setShowFeature && setShowFeature(true)
         }}
         {...restProps}
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
Card.Feature = function CardFeature() {
   const { showFeature, itemFeature } = useContext(FeatureContext)

   if (!showFeature || !itemFeature) return null
   const { original_title: title, backdrop_path: image, overview } = itemFeature

   return (
      <Feature
         src={
            image
               ? `http://image.tmdb.org/t/p/original${image}`
               : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
         }
      >
         <Feature.Title>{title}</Feature.Title>
         <Feature.Subtitle>{overview}</Feature.Subtitle>
      </Feature>
   )
}

export default Card
