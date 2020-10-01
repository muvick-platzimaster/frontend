import React, {
   createContext,
   useContext,
   useEffect,
   useRef,
   useState
} from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Movie } from '../../interfaces'
import { useInView } from 'react-intersection-observer'
/* Components */

import { Feature } from '../'

/* Styles */
import {
   Container,
   Title,
   RowContainer,
   Entities,
   Subtitle,
   Description,
   Image,
   Item,
   Details,
   Page,
   ToPage,
   ImageContainer,
   Pane,
   Badge
} from './styles/card'
import { Spinner } from '../Icons'

/* Context */
import { useSwitch } from '../../context/switchContext'

/* i18n */
import { useTranslation } from 'react-i18next'

/* Types */
type PropsWithChildren = { children: React.ReactNode }
type PropsImage = React.ImgHTMLAttributes<HTMLImageElement>
interface PropsItem {
   children: React.ReactNode
   item: Movie
}
interface PropsBadge {
   children: React.ReactNode
   rating: number
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
   const { switchValue } = useSwitch()
   const { i18n } = useTranslation(['header'])

   const { ref, inView } = useInView({ rootMargin: '50px', triggerOnce: true })
   const api =
      genreId === 1
         ? `/${switchValue}/popular?language=${i18n.language}`
         : `/${switchValue}?genre=${genreId}&language=${i18n.language}`

   const { data, loading } = useFetchData(api)

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
         <RowContainer ref={ref}>
            {loading ? <Spinner color="white" /> : inView && children}
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

   const handleResize = () => {
      setscrollWidth(ref?.current?.offsetWidth || 0)
   }

   useEffect(() => {
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [ref?.current?.scrollLeft])

   const handleClickNext = () => {
      if (ref.current) {
         ref.current.scrollLeft += scrollWidth
      }
   }

   const handleClickPrevious = () => {
      if (ref.current) {
         ref.current.scrollLeft -= scrollWidth
      }
   }

   return (
      <>
         <Page>
            <Entities ref={ref}>
               <ToPage onClick={handleClickPrevious}>&laquo;</ToPage>

               {movies?.map((movie) => {
                  const {
                     id,
                     poster_path: poster,
                     title,
                     name,
                     overview,
                     vote_average: votes
                  } = movie
                  return (
                     <Card.Item key={`${genre}-${id}`} item={movie}>
                        <ImageContainer>
                           <Card.Image
                              src={
                                 poster
                                    ? `http://image.tmdb.org/t/p/w400/${poster}`
                                    : 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'
                              }
                              loading="lazy"
                           />
                        </ImageContainer>
                        <Card.Details>
                           <Card.Pane>
                              <Card.Subtitle>
                                 {name || title}{' '}
                                 <Card.Badge rating={votes}>
                                    {votes * 10}%
                                 </Card.Badge>
                              </Card.Subtitle>
                           </Card.Pane>
                           <Card.Pane>
                              <Card.Description>{overview}</Card.Description>
                           </Card.Pane>
                        </Card.Details>
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
Card.Badge = function CardBadge({ children, rating }: PropsBadge) {
   return <Badge theme={{ rating }}>{children}</Badge>
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

Card.Description = function CardDescription({ children }: PropsWithChildren) {
   return <Description>{children}</Description>
}
Card.Pane = function CardPane({ children }: PropsWithChildren) {
   return <Pane>{children}</Pane>
}
Card.Feature = function CardFeature() {
   const { t } = useTranslation(['feature'])
   const { showFeature, itemFeature, setShowFeature } = useContext(
      FeatureContext
   )

   if (!showFeature || !itemFeature) return null
   const {
      backdrop_path: image,
      overview,
      vote_average: vote,
      title,
      name,
      id
   } = itemFeature

   return (
      <Feature
         src={
            image
               ? `http://image.tmdb.org/t/p/original${image}`
               : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
         }
      >
         <Feature.Pane>
            <Feature.Title>
               {title || name}{' '}
               <Feature.Badge rating={vote}>{vote}/10</Feature.Badge>
            </Feature.Title>
            <Feature.Subtitle>{overview}</Feature.Subtitle>
            <Feature.Button to={`/browse/${title ? 'movie' : 'tv'}/${id}`}>
               {t('feature:play', 'Play')}
            </Feature.Button>
         </Feature.Pane>
         {/* <Feature.Pane>2 pane</Feature.Pane> */}
         <Feature.Close handleClose={setShowFeature} />
      </Feature>
   )
}

export default Card
