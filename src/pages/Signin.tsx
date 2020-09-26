import React, { FC, Fragment, useState, FormEvent } from 'react'
import { Footer, Form } from '../components'
import HeaderContainer from '../containers/Header'
import ROUTES from '../constants/routes'
import { Spinner } from '../components/Icons'
import axios, { AxiosError } from 'axios'

const Signin: FC = (): JSX.Element => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [error, setError] = useState<null | AxiosError>(null)
   const [loading, setLoading] = useState<boolean>(false)
   const isInvalid = email === '' || password === ''

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      setError(null)
      setLoading(true)
      axios({
         baseURL: 'http://localhost:5000',
         url: '/auth/signin',
         method: 'POST',
         data: {
            email,
            password
         }
      })
         .then(({ data }) => {
            localStorage.setItem('TOKEN', data.accessToken)
         })
         .then(() => location.reload())
         .catch((err: AxiosError) => {
            setError(err)

            setEmail('')
            setPassword('')
         })
         .finally(() => setLoading(false))
   }

   return (
      <Fragment>
         <HeaderContainer>
            <Form onSubmit={handleSubmit} action={ROUTES.SIGN_IN} method="POST">
               <Form.Title>Sign In</Form.Title>
               {error && (
                  <Form.Error>
                     {error?.response?.data.message === 'invalid_credentials'
                        ? 'Invalid Credencials'
                        : 'Internal Server Error'}
                  </Form.Error>
               )}
               <Form.FormGroup
                  value={email}
                  name="email"
                  type="email"
                  onChange={({ target }) => setEmail(target.value)}
                  autoFocus
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
                  autoComplete="off"
                  onChange={({ target }) => setPassword(target.value)}
               >
                  Password
               </Form.FormGroup>
               <Form.Submit type="submit" disabled={isInvalid || loading}>
                  {loading ? (
                     <Spinner color="#fff" width="1rem" height="100%" />
                  ) : (
                     'Sign In'
                  )}
               </Form.Submit>
               <Form.Text>
                  New to Netflix?{' '}
                  <Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>.
               </Form.Text>

               <Form.TextSmall>
                  This page is protected by Google reCAPTCHA to ensure
                  you&lsquo;re not a bot.
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <Footer />
      </Fragment>
   )
}

export default Signin
