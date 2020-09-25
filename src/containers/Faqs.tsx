import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Accordion, Wrapper, InputForm } from '../components'
import ROUTES from '../constants/routes'

import faqs from '../fixtures/faqs.json'
import { breakpoints } from '../styles/theme'

function Faqs(): JSX.Element {
   const [email, setEmail] = useState('')
   const history = useHistory()
   const handleClick = () => {
      if (email) {
         history.push(ROUTES.SIGN_UP)
      }
   }
   return (
      <Accordion>
         <Wrapper maxWidth={breakpoints.md}>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
               {faqs.map(({ body, header, id }) => (
                  <Accordion.Item key={id}>
                     <Accordion.Button>
                        <Accordion.Text>{header}</Accordion.Text>
                        <Accordion.IconContainer />
                     </Accordion.Button>
                     <Accordion.Body>{body}</Accordion.Body>
                  </Accordion.Item>
               ))}
            </Accordion.Frame>

            <InputForm>
               <InputForm.Label>
                  Ready to watch? Enter your email to create or restart your
                  membership.
               </InputForm.Label>
               <InputForm.Frame>
                  <InputForm.Input
                     onChange={({ target }) => setEmail(target.value)}
                     placeholder="Email"
                     value={email}
                     type="email"
                  />
                  <InputForm.Button disabled={!email} onClick={handleClick}>
                     <InputForm.Text>Get started</InputForm.Text>
                     <InputForm.Icon />
                  </InputForm.Button>
               </InputForm.Frame>
            </InputForm>
         </Wrapper>
      </Accordion>
   )
}

export default Faqs
