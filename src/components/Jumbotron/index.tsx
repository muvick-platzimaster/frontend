import React, { FC, Fragment } from 'react'
import { breakpoints } from '../../styles/theme'
import { Wrapper, Title } from '../'

/* Styles */
import { Container, Pane, SubTitle, Image, Grid } from './styles'

interface Props {
   direction: string
   subTitle: string
   image: string
   alt: string
   title: string
}

const Jumbotron: FC<Props> = (props: Props) => {
   const { alt, image, direction, subTitle, title } = props

   return (
      <Container>
         <Wrapper maxWidth={breakpoints.lg}>
            <Grid theme={{ direction }}>
               <Pane>
                  <Title>{title}</Title>
                  <SubTitle>{subTitle}</SubTitle>
               </Pane>
               <Pane>
                  <Image src={image} alt={alt} />
               </Pane>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Jumbotron
