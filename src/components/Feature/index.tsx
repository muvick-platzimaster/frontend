import React from 'react'
import { breakpoints } from '../../styles/theme'
import { Plus } from '../Icons'
import Wrapper from '../Wrapper'

/* Styles */
import {
   Container,
   Title,
   Grid,
   Subtitle,
   Pane,
   Badge,
   CloseContainer,
   Button
} from './styles/feature'

/* types */
type PropsWithChildren = { children: React.ReactNode }
interface PropsFeature {
   children: React.ReactNode
   src: string
}

interface PropsBadge {
   children: React.ReactNode
   rating: number
}

interface PropsButton {
   children: React.ReactNode
   to: string
}

interface PropsClose extends React.SVGProps<SVGSVGElement> {
   handleClose: React.Dispatch<React.SetStateAction<boolean>> | undefined
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

Feature.Pane = function FeaturePane({ children }: PropsWithChildren) {
   return <Pane>{children}</Pane>
}
Feature.Badge = function FeatureBadge({ children, rating }: PropsBadge) {
   return <Badge theme={{ rating }}>{children}</Badge>
}
Feature.Button = function FeatureButton({
   children,
   to,
   ...restProps
}: PropsButton) {
   return (
      <Button to={to} {...restProps}>
         {children}
      </Button>
   )
}

Feature.Close = function FeatureClose({
   handleClose,
   ...restProps
}: PropsClose) {
   return (
      <CloseContainer onClick={() => handleClose && handleClose(false)}>
         <Plus color="white" transform="rotate(45)" {...restProps} />
      </CloseContainer>
   )
}

export default Feature
