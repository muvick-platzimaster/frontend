import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Footer, UserVerification } from '../components'
import NavContainer from '../containers/Nav'
import { colors } from '../styles/theme'
import ROUTES from '../constants/routes'
import jwtDecode from 'jwt-decode'
import Axios, { AxiosError, CancelTokenSource } from 'axios'
import config from '../config'
import { TOKEN, VERIFY } from '../constants/itemsLocalStorage'
import { useTranslation } from 'react-i18next'

/* Google Analytics */
import { Analytics } from '../analytics'
Analytics(window.location.pathname + window.location.search)

const UserVerificationPage: FC = () => {
   const { t } = useTranslation(['verify'])
   const { Button, Text, Title, Input, Error } = UserVerification
   const [pin, setPin] = React.useState<string>('')
   const [error, setError] = React.useState<AxiosError | null>(null)
   const history = useHistory()
   let source: CancelTokenSource

   const handleVerify = () => {
      setError(null)
      const { email } = jwtDecode(localStorage.getItem(TOKEN) || '')
      source = Axios.CancelToken.source()
      Axios({
         method: 'POST',
         baseURL: config.API_URL_SERVER,
         url: '/auth/confirm',
         cancelToken: source.token,
         headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
         data: {
            email,
            pin
         }
      })
         .then(() => {
            const { suspended } = JSON.parse(
               localStorage.getItem(VERIFY) || '{}'
            )

            localStorage.setItem(
               VERIFY,
               JSON.stringify({ confirmed: true, suspended })
            )

            history.replace(ROUTES.BROWSE)
         })
         .catch(setError)
   }

   const handleErrors = (err: AxiosError) => {
      if (err.response?.data.message === 'pin_not_match') {
         return 'The verification code is wrong.'
      }

      return 'internal server error'
   }

   return (
      <>
         <NavContainer>
            <UserVerification>
               <Title>{t('verify:title', 'Verificar tu cuenta')}</Title>
               <Text>
                  {t(
                     'verify:text',
                     'Enviamos un código de verificación a tu correo electrónico. Ingrésalo a continuación para verificar tu cuenta.'
                  )}
               </Text>
               {error && (
                  <Error>
                     {t('verify:error', 'Error')}: {handleErrors(error)}
                  </Error>
               )}
               <Input
                  placeholder="Código de verificación"
                  size={4}
                  maxLength={4}
                  pattern="[0-9]{4}"
                  required
                  value={pin}
                  onChange={({ target }) => {
                     setPin(target.value)
                  }}
               />
               <Button
                  onClick={handleVerify}
                  disabled={pin === '' || pin.length !== 4}
                  color={colors['color-primary']}
               >
                  {t('verify:veri', 'Verificar')}
               </Button>
               <Link to={ROUTES.BROWSE}>
                  <Button color={colors['color-gray-dark']}>
                     {t('verify:cancel', 'Cancelar')}
                  </Button>
               </Link>
            </UserVerification>
         </NavContainer>
         <Footer />
      </>
   )
}

export default UserVerificationPage
