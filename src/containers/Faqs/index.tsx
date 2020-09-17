import React, { FC, Fragment } from 'react'
import { Accordion, Wrapper } from '../../components'

import faqs from '../../fixtures/faqs.json'
import { breakpoints } from '../../styles/theme'

/* Styles */
import { Container, Title } from './styles'

const Faqs: FC = () => {
   return (
      <Container>
         <Wrapper maxWidth={breakpoints.md}>
            <Fragment>
               <Title>Preguntas frecuentes</Title>
               {faqs.map(({ body, header, id }) => (
                  <Accordion key={id} answer={body} question={header} />
               ))}
            </Fragment>
         </Wrapper>
      </Container>
   )
}

export default Faqs
