import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Footer, UserVerification } from '../components'
import NavContainer from '../containers/Nav'
import { colors } from '../styles/theme'
import ROUTES from '../constants/routes'
import jwtDecode from 'jwt-decode'
import Axios, { AxiosError } from 'axios'

const UserVerificationPage: FC = () => {
   const { Button, Text, Title, Input, Error } = UserVerification
   const [pin, setPin] = React.useState<string>('')
   const [error, setError] = React.useState<AxiosError | null>(null)
   const history = useHistory()

   const handleVerify = () => {
      setError(null)
      const tokenDecode: { email: string } = jwtDecode(
         localStorage.getItem('TOKEN') || ''
      )
      const email = tokenDecode.email

      Axios({
         method: 'POST',
         baseURL: 'http://localhost:5000/',
         url: '/auth/confirm',
         headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
         data: {
            email,
            pin
         }
      })
         .then(() => history.replace(ROUTES.BROWSE))
         .catch((err: AxiosError) => {
            setError(err)
         })
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
               <Title>Verificar tu cuenta</Title>
               <Text>
                  Enviamos un código de verificación a tu correo electrónico.
                  Ingrésalo a continuación para verificar tu cuenta.
               </Text>
               {error && <Error>Error: {handleErrors(error)}</Error>}
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
                  Verificar
               </Button>
               <Link to={ROUTES.BROWSE}>
                  <Button color={colors['color-gray-dark']}>Cancelar</Button>
               </Link>
            </UserVerification>
         </NavContainer>
         <Footer />
      </>
   )
}

export default UserVerificationPage
