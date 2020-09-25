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
               <Form.Title>Welcome back!</Form.Title>
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
                  Username
               </Form.FormGroup>
               <Form.FormGroup
                  value={email}
                  name="email"
                  type="email"
                  autoComplete="off"
                  onChange={({ target }) => setEmail(target.value)}
                  required
               >
                  Email
               </Form.FormGroup>
               <Form.FormGroup
                  value={password}
                  required
                  minLength={10}
                  maxLength={20}
                  name="password"
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
               >
                  Password
               </Form.FormGroup>
               <Form.Submit type="submit" disabled={isInvalid}>
                  Sign Up
               </Form.Submit>
               <Form.Text>
                  I already have an{' '}
                  <Form.Link to={ROUTES.SIGN_IN}>account</Form.Link>!
               </Form.Text>

               <Form.TextSmall>
                  This page is protected by Google reCAPTCHA to ensure
                  you&apos;re not a bot.
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <Footer />
      </Fragment>
   )
}

export default Signup
