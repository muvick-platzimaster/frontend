import React, { FC, Fragment, useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import Axios, { AxiosError } from 'axios'

/* Components */
import { Footer, Form } from '../components'

/* Icons */
import { Spinner } from '../components/Icons'

/* Containers */
import HeaderContainer from '../containers/Header'

/* Constants */
import ROUTES from '../constants/routes'
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

   const handleErrors = (messageError: string | Array<string>) => {
      if (messageError === 'email_already_exists') {
         return t('signup:errors.user', 'This user already exists')
      }

      if (messageError === 'password_not_secure') {
         return t(
            'signup:errors.password',
            'The password must have a minimum of 10 characters, maximum 20. Among them there must be at least one uppercase, one lowercase, one digit and some special character.'
         )
      }

      if (messageError[0] === 'email must be an email') {
         return t('signup:errors.must_be_an_email')
      }

      return t('signup:errors.internal_error')
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
                  autoFocus
               >
                  {t('signup:form.user', 'Username')}
               </Form.FormGroup>
               <Form.FormGroup
                  value={email}
                  name="email"
                  type="text"
                  onChange={({ target }) => setEmail(target.value)}
                  required
               >
                  {t('signup:form.email', 'Email')}
               </Form.FormGroup>
               <Form.FormGroup
                  value={password}
                  required
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
