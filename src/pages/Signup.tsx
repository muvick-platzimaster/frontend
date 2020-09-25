import React, { FC, Fragment, useState, FormEvent } from 'react'
import { Footer, Form } from '../components'
import HeaderContainer from '../containers/Header'
import ROUTES from '../constants/routes'
import axios from 'axios'

const Signup: FC = (): JSX.Element => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [username, setUsername] = useState<string>('')
   const [error, setError] = useState<null | Error>(null)
   const isInvalid = email === '' || password === '' || username === ''

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      setEmail('')
      setPassword('')
      setUsername('')
      setError(null)

      axios({
         baseURL: 'http://localhost:5000',
         method: 'POST',
         url: '/auth/signup',
         data: {
            email,
            password,
            name: username
         }
      }).catch(setError)
   }

   return (
      <Fragment>
         <HeaderContainer>
            <Form onSubmit={handleSubmit} action={ROUTES.SIGN_IN} method="POST">
               <Form.Title>Registrarse</Form.Title>
               {error && <Form.Error>{error?.message}</Form.Error>}
               <Form.FormGroup
                  value={username}
                  name="username"
                  type="text"
                  onChange={({ target }) => setUsername(target.value)}
                  required
                  autoComplete="off"
                  autoFocus
               >
                  Nombre de usuario
               </Form.FormGroup>
               <Form.FormGroup
                  value={email}
                  minLength={5}
                  name="email"
                  type="email"
                  onChange={({ target }) => setEmail(target.value)}
                  required
               >
                  Email
               </Form.FormGroup>
               <Form.FormGroup
                  value={password}
                  required
                  minLength={5}
                  name="password"
                  type="password"
                  autoComplete="off"
                  onChange={({ target }) => setPassword(target.value)}
               >
                  Password
               </Form.FormGroup>
               <Form.Submit type="submit" disabled={isInvalid}>
                  Registrarse
               </Form.Submit>
               <Form.Text>
                  ¡Ya tengo una{' '}
                  <Form.Link to={ROUTES.SIGN_IN}>cuenta</Form.Link>!
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
