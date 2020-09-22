import React, { createContext, useContext, useState } from 'react'
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
}

/* Card Component */

const FeatureContext = createContext<Partial<Context>>({})

const Card = ({ children }: PropsWithChildren): JSX.Element => {
   return <Container>{children}</Container>
}

Card.Title = function CardTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

Card.RowContainer = function CardRowContainer({ children }: PropsWithChildren) {
   const [showFeature, setShowFeature] = useState<boolean>(false)
   const [itemFeature, setItemFeature] = useState<Movie | null>(null)

   return (
      <FeatureContext.Provider
         value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
      >
         <RowContainer>{children}</RowContainer>
      </FeatureContext.Provider>
   )
}

Card.Entities = function CardEntities({ children }: PropsWithChildren) {
   return <Entities>{children}</Entities>
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
