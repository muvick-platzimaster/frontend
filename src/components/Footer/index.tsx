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
                  Questions? Call{' '}
                  <Anchor href="tel:57 321 231 24">+57 320 843 57 39</Anchor>
               </Title>

               <Row>
                  <Column>
                     <Anchor>FAQ</Anchor>
                     <Anchor>Investor Relations</Anchor>
                     <Anchor>Ways to Watch</Anchor>
                     <Anchor>Corporate Information</Anchor>
                     <Anchor>Netflix Originals</Anchor>
                  </Column>
                  <Column>
                     <Anchor>Help Center</Anchor>
                     <Anchor>Terms of Use</Anchor>
                     <Anchor>Contact Us</Anchor>
                  </Column>
                  <Column>
                     <Anchor>Account</Anchor>
                     <Anchor>Redeem Gift Cards</Anchor>
                     <Anchor>Privacy</Anchor>
                     <Anchor>Speed Test</Anchor>
                  </Column>
                  <Column>
                     <Anchor>Media Center</Anchor>
                     <Anchor>Buy Gift Cards</Anchor>
                     <Anchor>Cookie Preferences</Anchor>
                     <Anchor>Legal Notices</Anchor>
                  </Column>
               </Row>

               <Text>@Muvick</Text>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Footer
