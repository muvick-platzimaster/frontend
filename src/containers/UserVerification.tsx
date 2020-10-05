import React from 'react'
import { UserVerification } from '../components'
import { colors } from '../styles/theme'
import { Link } from 'react-router-dom'
import ROUTES from '../constants/routes'

/* i18n */
import { useTranslation } from 'react-i18next'

const UserVerificationContainer = (): JSX.Element => {
   const { t } = useTranslation(['userVerify'])
   const { Button, Pane, Text, Title, WarningIcon } = UserVerification
   return (
      <UserVerification>
         <Pane>
            <WarningIcon />
            <Title>{t('userVerify:title', 'Verifica tu cuenta')}</Title>
         </Pane>

         <Text>
            {t(
               'userVerify:text',
               'Te enviamos un código a tu correo electrónico para que puedas realizar la verificación de tu cuenta. La verificación te permite tener tu cuenta siempre.'
            )}
         </Text>
         <Link to={ROUTES.VERIFY}>
            <Button color={colors['color-primary']}>
               {t('userVerify:verfi', 'Verificar cuenta')}
            </Button>
         </Link>
      </UserVerification>
   )
}

export default UserVerificationContainer
