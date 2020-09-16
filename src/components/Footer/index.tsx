import React, { FC } from 'react'
import { Wrapper } from '../'

/* Styles */
import { Container, Grid, Title, Anchor, Column, Row, Text } from './styles'

const Footer: FC = () => {
   return (
      <Container>
         <Wrapper>
            <Grid>
               <Title>
                  ¿Preguntas? Llama al{' '}
                  <Anchor href="tel:57 321 231 24">+57 320 843 57 39</Anchor>
               </Title>

               <Row>
                  <Column>
                     <Anchor>Preguntas frecuentes</Anchor>
                     <Anchor>Relaciones con inversionistas</Anchor>
                     <Anchor>Formas de ver</Anchor>
                     <Anchor>Información corporativa</Anchor>
                  </Column>
                  <Column>
                     <Anchor>Preguntas frecuentes</Anchor>
                     <Anchor>Relaciones con inversionistas</Anchor>
                     <Anchor>Formas de ver</Anchor>
                     <Anchor>Información corporativa</Anchor>
                  </Column>
                  <Column>
                     <Anchor>Preguntas frecuentes</Anchor>
                     <Anchor>Relaciones con inversionistas</Anchor>
                     <Anchor>Formas de ver</Anchor>
                     <Anchor>Información corporativa</Anchor>
                  </Column>
                  <Column>
                     <Anchor>Preguntas frecuentes</Anchor>
                     <Anchor>Relaciones con inversionistas</Anchor>
                     <Anchor>Formas de ver</Anchor>
                     <Anchor>Información corporativa</Anchor>
                  </Column>
               </Row>

               <Text>Muvick Colombia</Text>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Footer
