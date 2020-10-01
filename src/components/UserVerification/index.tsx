import React from 'react'
import { Wrapper } from '../'
import { breakpoints, colors } from '../../styles/theme'

/* Styles */
import {
   Container,
   Grid,
   Title,
   Text,
   Pane,
   Button,
   IconContainer,
   Input,
   Error
} from './styles/user-verification'

/* Icons */
import { AlertCircle } from '../Icons'

/* Types */
interface PropsWithChildren {
   children: React.ReactNode
}
interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   color: string
   children: React.ReactNode
}

type PropsInput = React.InputHTMLAttributes<HTMLInputElement>

const UserVerification = ({ children }: PropsWithChildren): JSX.Element => {
   return (
      <Container>
         <Wrapper maxWidth={breakpoints.sm}>
            <Grid>{children}</Grid>
         </Wrapper>
      </Container>
   )
}

UserVerification.Title = function UserVerificationTitle({
   children
}: PropsWithChildren) {
   return <Title>{children}</Title>
}

UserVerification.Text = function UserVerificationText({
   children
}: PropsWithChildren) {
   return <Text>{children}</Text>
}

UserVerification.Pane = function UserVerificationPane({
   children
}: PropsWithChildren) {
   return <Pane>{children}</Pane>
}

UserVerification.Input = function UserVerificationInput({
   ...props
}: PropsInput) {
   return <Input {...props} />
}
UserVerification.Error = function UserVerificationError({
   children
}: PropsWithChildren) {
   return <Error>{children}</Error>
}

UserVerification.Button = function UserVerificationButton({
   children,
   color,
   ...restProps
}: PropsButton) {
   return (
      <Button {...restProps} theme={{ color }}>
         {children}
      </Button>
   )
}

UserVerification.WarningIcon = function UserVerificationWarningIcon() {
   return (
      <IconContainer>
         <AlertCircle
            height="100%"
            width="100%"
            color={colors['color-warning']}
         />
      </IconContainer>
   )
}

export default UserVerification
