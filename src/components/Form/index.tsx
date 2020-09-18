import React, { ReactNode } from 'react'

import ROUTES from '../../constants/routes'
import { breakpoints } from '../../styles/theme'
import Wrapper from '../Wrapper'

/* Styles */
import {
   Container,
   Error,
   Title,
   Text,
   TextSmall,
   Link,
   Input,
   Submit,
   Base,
   Grid,
   FormGroup,
   Label,
   Span
} from './styles/form'

/* Types */
type PropsWithChildren = { children: ReactNode }
type PropsFormGroup = {
   name: string
   type: string
   minLength: number
   children: ReactNode
}

function Form({ children }: PropsWithChildren): JSX.Element {
   return (
      <Container>
         <Wrapper maxWidth={breakpoints.xs}>
            <Grid>{children}</Grid>
         </Wrapper>
      </Container>
   )
}

Form.Error = function FormError({ children }: PropsWithChildren) {
   return <Error>{children}</Error>
}

Form.Title = function FormTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

Form.Text = function FormText({ children }: PropsWithChildren) {
   return <Text>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children }: PropsWithChildren) {
   return <TextSmall>{children}</TextSmall>
}

Form.Link = function FormLink({ children }: PropsWithChildren) {
   return <Link to={ROUTES.HOME}>{children}</Link>
}

Form.Submit = function FormSubmit({ children }: PropsWithChildren) {
   return <Submit type="submit">{children}</Submit>
}

Form.Base = function FormBase({ children }: PropsWithChildren) {
   return <Base>{children}</Base>
}

Form.FormGroup = function FormFormGroup({
   name,
   type,
   minLength,
   children
}: PropsFormGroup) {
   return (
      <FormGroup>
         <Input
            required
            id={name}
            type={type}
            name={name}
            minLength={minLength}
         />
         <Label htmlFor={name}>
            <Span>{children}</Span>
         </Label>
      </FormGroup>
   )
}

export default Form
