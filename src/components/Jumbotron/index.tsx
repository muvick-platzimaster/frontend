import React, { FC } from 'react'
import { breakpoints } from '../../styles/theme'
import Wrapper from '../Wrapper'

/* Styles */
import { Container, Pane, Title, SubTitle, Image, Grid } from './styles'

interface Props {
   direction: string
   title: string
   subTitle: string
   image: string
   alt: string
   Container: FC
}

const Jumbotron: FC<Props> = ({
   direction,
   title,
   subTitle,
   image,
   alt
}: Props) => {
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
