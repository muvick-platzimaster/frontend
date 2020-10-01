import React from 'react'
import { UserVerification } from '../components'
import { colors } from '../styles/theme'
import { Link } from 'react-router-dom'
import ROUTES from '../constants/routes'

const UserVerificationContainer = (): JSX.Element => {
   const { Button, Pane, Text, Title, WarningIcon } = UserVerification
   return (
      <UserVerification>
         <Pane>
            <WarningIcon />
            <Title>Verifica tu cuenta</Title>
         </Pane>

         <Text>
            Te enviamos un código a tu correo electrónico para que puedas
            realizar la verificación de tu cuenta. La verificación te permite
            tener tu cuenta siempre.
         </Text>
         <Link to={ROUTES.VERIFY}>
            <Button color={colors['color-primary']}>Verificar cuenta</Button>
         </Link>
      </UserVerification>
   )
}

export default UserVerificationContainer
