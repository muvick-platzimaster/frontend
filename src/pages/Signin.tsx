import React, { FC, Fragment, useState, FormEvent } from 'react'
import { Footer, Form } from '../components'
import HeaderContainer from '../containers/Header'
import ROUTES from '../constants/routes'
import { Spinner } from '../components/Icons'
import axios, { AxiosError } from 'axios'

/* i18n */
import { useTranslation } from 'react-i18next'

const Signin: FC = (): JSX.Element => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [error, setError] = useState<null | AxiosError>(null)
   const [loading, setLoading] = useState<boolean>(false)
   const isInvalid = email === '' || password === ''
   const { t } = useTranslation(['signin'])

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
               <Form.Title> {t('signin:form.sign', 'Sign In')}</Form.Title>
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
                  {t('signin:form.email', 'Email')}
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
                  {t('signin:form.password', 'Password')}
               </Form.FormGroup>
               <Form.Submit type="submit" disabled={isInvalid || loading}>
                  {loading ? (
                     <Spinner color="#fff" width="1rem" height="100%" />
                  ) : (
                     `${t('signin:form.signin', 'Sign in')}`
                  )}
               </Form.Submit>
               <Form.Text>
                  {t('signin:form.new', 'New to Netflix?')}{' '}
                  <Form.Link to={ROUTES.SIGN_UP}>
                     {t('signin:form.signup', 'Sign up now')}
                  </Form.Link>
                  .
               </Form.Text>

               <Form.TextSmall>
                  {t(
                     'signin:form.recaptcha',
                     'This page is protected by Google reCAPTCHA to ensure you&lsquo;re not a bot.'
                  )}
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <Footer />
      </Fragment>
   )
}

export default Signin
