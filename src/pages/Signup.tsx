import React, { Fragment } from 'react'
import { Footer, Form } from '../components'
import HeaderContainer from '../containers/Header'

function Signup(): JSX.Element {
   return (
      <Fragment>
         <HeaderContainer>
            <Form>
               <Form.Title>Iniciar Sesión</Form.Title>
               <Form.FormGroup minLength={5} name="email" type="text">
                  Email
               </Form.FormGroup>
               <Form.FormGroup minLength={5} name="password" type="password">
                  Password
               </Form.FormGroup>
               <Form.Submit>Iniciar Sesión</Form.Submit>
               <Form.Text>
                  ¿Primera vez en Muvick? <Form.Link>Suscríbete aquí</Form.Link>
               </Form.Text>

               <Form.TextSmall>
                  Esta página está protegida por Google reCAPTCHA para comprobar
                  que no eres un robot.
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <Footer />
      </Fragment>
   )
}

export default Signup
