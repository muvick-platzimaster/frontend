import React, {
   createContext,
   useContext,
   useEffect,
   useRef,
   useState
} from 'react'
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
   Details,
   Page,
   ToPage,
   ImageContainer
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
      <Page>
         <Entities ref={ref}>
            <ToPage onClick={handleClickPrevious}>&laquo;</ToPage>
            {movies?.map((movie) => (
               <Card.Item
                  key={`${genre}-${movie.id}`}
                  item={movie}
                  hidden={!movie.backdrop_path}
               >
                  <ImageContainer>
                     <Card.Image
                        src={`http://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
                     />
                  </ImageContainer>
               </Card.Item>
            ))}
            <ToPage onClick={handleClickNext}>&raquo;</ToPage>
         </Entities>
      </Page>
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

export default Card
