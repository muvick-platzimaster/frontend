import React, {
   ButtonHTMLAttributes,
   FormHTMLAttributes,
   InputHTMLAttributes,
   ReactNode
} from 'react'

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
interface PropsFormGroup extends InputHTMLAttributes<HTMLInputElement> {
   children: ReactNode
}

interface PropsForm extends FormHTMLAttributes<HTMLFormElement> {
   children: ReactNode
}

interface PropsFormSubmit extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
}

interface PropsFormLink {
   children: ReactNode
   to: string
}
function Form({ children, ...restProps }: PropsForm): JSX.Element {
   return (
      <Container {...restProps}>
         <Wrapper maxWidth={breakpoints.xs}>
            <Grid>{children}</Grid>
         </Wrapper>
      </Container>
   )
}

Form.Error = function FormError({ children }: PropsWithChildren) {
   return (
      <Error>
         <p>{children}</p>
      </Error>
   )
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

Form.Link = function FormLink({ children, to, ...restProps }: PropsFormLink) {
   return (
      <Link to={to} {...restProps}>
         {children}
      </Link>
   )
}

Form.Submit = function FormSubmit({ children, ...restProps }: PropsFormSubmit) {
   return <Submit {...restProps}>{children}</Submit>
}

Form.Base = function FormBase({ children }: PropsWithChildren) {
   return <Base>{children}</Base>
}

Form.FormGroup = function FormFormGroup({
   children,
   ...restProps
}: PropsFormGroup) {
   return (
      <FormGroup>
         <Input {...restProps} />
         <Label>
            <Span>{children}</Span>
         </Label>
      </FormGroup>
   )
}

export default Form
