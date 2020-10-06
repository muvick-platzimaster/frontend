import React, { FC, Fragment, useState, FormEvent } from 'react'
import { Footer, Form } from '../components'
import HeaderContainer from '../containers/Header'
import ROUTES from '../constants/routes'
import Axios, { AxiosError } from 'axios'
import { useHistory } from 'react-router-dom'
import { Spinner } from '../components/Icons'
import config from '../config'

/* i18n */
import { useTranslation } from 'react-i18next'

/* Google Analytics */
import { Analytics } from '../analytics'
Analytics(window.location.pathname + window.location.search)

const Signup: FC = (): JSX.Element => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [username, setUsername] = useState<string>('')
   const [error, setError] = useState<null | AxiosError>(null)
   const [loading, setLoading] = useState<boolean>(false)
   const isInvalid = email === '' || password === '' || username === ''
   const history = useHistory()
   const { t } = useTranslation(['signup'])

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      setEmail('')
      setPassword('')
      setUsername('')
      setLoading(true)
      setError(null)

      const source = Axios.CancelToken.source()

      Axios({
         baseURL: config.API_URL_SERVER,
         method: 'POST',
         url: '/auth/signup',
         cancelToken: source.token,
         data: {
            email,
            password,
            name: username
         }
      })
         .then(() => history.push('/signin'))
         .catch((err: AxiosError) => {
            setError(err)
            setLoading(false)
         })
   }

   const handleErrors = (messageError: string) => {
      if (messageError === 'email_already_exists') {
         return 'User already exists'
      }

      return 'Internal server error'
   }

   return (
      <Fragment>
         <HeaderContainer>
            <Form onSubmit={handleSubmit} action={ROUTES.SIGN_IN} method="POST">
               <Form.Title>
                  {t('signup:form.welcome', 'Welcome back!')}
               </Form.Title>
               {error && (
                  <Form.Error>
                     {handleErrors(error?.response?.data.message)}
                  </Form.Error>
               )}
               <Form.FormGroup
                  value={username}
                  name="username"
                  type="text"
                  onChange={({ target }) => setUsername(target.value)}
                  required
                  autoComplete="off"
                  autoFocus
               >
                  {t('signup:form.user', 'Username')}
               </Form.FormGroup>
               <Form.FormGroup
                  value={email}
                  name="email"
                  type="email"
                  onChange={({ target }) => setEmail(target.value)}
                  required
               >
                  {t('signup:form.email', 'Email')}
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
                  {t('signup:form.password', 'Password')}
               </Form.FormGroup>
               <Form.Submit type="submit" disabled={isInvalid}>
                  {loading ? (
                     <Spinner color="#fff" width="1rem" height="100%" />
                  ) : (
                     'Sign Up'
                  )}
               </Form.Submit>
               <Form.Text>
                  {t('signup:form.already', 'I already have an')}{' '}
                  <Form.Link to={ROUTES.SIGN_IN}>
                     {t('signup:form.account', 'account')}
                  </Form.Link>
                  !
               </Form.Text>

               <Form.TextSmall>
                  {t(
                     'signup:form.recaptcha',
                     'This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.'
                  )}
               </Form.TextSmall>
            </Form>
         </HeaderContainer>
         <Footer />
      </Fragment>
   )
}

export default Signup
