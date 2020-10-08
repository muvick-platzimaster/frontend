import React, { FC, Fragment, useState, FormEvent } from 'react'
import { Footer, Form } from '../components'
import HeaderContainer from '../containers/Header'
import ROUTES from '../constants/routes'
import { Spinner } from '../components/Icons'
import Axios, { AxiosError } from 'axios'
import config from '../config'

/* i18n */
import { useTranslation } from 'react-i18next'
import JwtDecode from 'jwt-decode'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'

/* Google Analytics */
import { Analytics } from '../analytics'
Analytics(window.location.pathname + window.location.search)

const Signin: FC = (): JSX.Element => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [error, setError] = useState<null | AxiosError>(null)
   const [loading, setLoading] = useState<boolean>(false)
   const isInvalid = email === '' || password === ''
   const { t } = useTranslation(['signin'])
   const source = Axios.CancelToken.source()

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      setError(null)
      setLoading(true)

      Axios({
         baseURL: config.API_URL_SERVER,
         url: '/auth/signin',
         method: 'POST',
         cancelToken: source.token,
         data: {
            email,
            password
         }
      })
         .then(({ data }) => {
            const { confirmed, suspended } = JwtDecode(data.accessToken)
            localStorage.setItem(TOKEN, data.accessToken)
            localStorage.setItem(
               VERIFY,
               JSON.stringify({ confirmed, suspended })
            )
         })
         .then(() => location.reload())
         .catch((err: AxiosError) => {
            setLoading(false)
            setError(err)
            setEmail('')
            setPassword('')
         })
   }

   const handleErrors = (messageError: string | Array<string>) => {
      if (messageError === 'invalid_credentials') {
         return t('signin:errors.invalid_credentials')
      }

      if (messageError[0] === 'email must be an email') {
         return t('signin:errors.must_be_an_email')
      }

      return t('signin:errors.internal_error')
   }

   return (
      <Fragment>
         <HeaderContainer>
            <Form onSubmit={handleSubmit} action={ROUTES.SIGN_IN} method="POST">
               <Form.Title> {t('signin:form.sign', 'Sign In')}</Form.Title>
               {error && (
                  <Form.Error>
                     {handleErrors(error.response?.data.message)}
                  </Form.Error>
               )}
               <Form.FormGroup
                  value={email}
                  name="email"
                  type="text"
                  onChange={({ target }) => setEmail(target.value)}
                  autoFocus
                  required
               >
                  {t('signin:form.email', 'Email')}
               </Form.FormGroup>
               <Form.FormGroup
                  value={password}
                  required
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
                  {t('signin:form.new', 'New to Muvick?')}{' '}
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
