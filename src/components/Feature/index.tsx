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
   PlayButton,
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

interface PropsPlayButton {
   children: React.ReactNode
   to: string
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
   colorHover: string
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

Feature.Button = function FeatureButton({
   children,
   colorHover,
   ...restProps
}: PropsButton) {
   return (
      <Button theme={{ colorHover }} {...restProps}>
         {children}
      </Button>
   )
}

Feature.Badge = function FeatureBadge({ children, rating }: PropsBadge) {
   return <Badge theme={{ rating }}>{children}</Badge>
}

Feature.PlayButton = function FeaturePlayButton({
   children,
   to,
   ...restProps
}: PropsPlayButton) {
   return (
      <PlayButton to={to} {...restProps}>
         {children}
      </PlayButton>
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
