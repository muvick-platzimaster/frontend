import React from 'react'
import { breakpoints } from '../../styles/theme'
import Wrapper from '../Wrapper'

/* Styles */
import { Container, Title, Grid, Subtitle } from './styles/feature'

/* types */
type PropsWithChildren = { children: React.ReactNode }
interface PropsFeature {
   children: React.ReactNode
   src: string
}

export const Feature = ({ children, src }: PropsFeature): JSX.Element => {
   return (
      <Container theme={{ src }}>
         <Wrapper maxWidth={breakpoints.xl}>
            <Grid>{children}</Grid>
         </Wrapper>
      </Container>
   )
}

Feature.Title = function FeatureTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

Feature.Subtitle = function FeatureSubtitle({ children }: PropsWithChildren) {
   return <Subtitle>{children}</Subtitle>
}

export default Feature
