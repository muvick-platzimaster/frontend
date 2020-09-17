import React, { FC, Fragment } from 'react'
import { Accordion, Wrapper, InputForm } from '../../components'

import faqs from '../../fixtures/faqs.json'
import { breakpoints } from '../../styles/theme'

/* Styles */
import { Container, Title, Text } from './styles'

const Faqs: FC = () => {
   return (
      <Container>
         <Wrapper maxWidth={breakpoints.md}>
            <Fragment>
               <Title>Preguntas frecuentes</Title>
               <ul>
                  {faqs.map(({ body, header, id }) => (
                     <Accordion key={id} answer={body} question={header} />
                  ))}
               </ul>
               <Text>
                  ¿Quieres ver Netflix ya? Ingresa tu email para crear una
                  cuenta o reiniciar tu membresía de Netflix.
               </Text>
               <InputForm placeholder="Email" textButton="Comienza ya" />
            </Fragment>
         </Wrapper>
      </Container>
   )
}

export default Faqs
