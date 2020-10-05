import React, {
   ButtonHTMLAttributes,
   InputHTMLAttributes,
   ReactNode
} from 'react'

/* Icons */
import ArrowRight from '../Icons/ArrowRight'

/* Styles */
import { Input, Container, Button, Text, Label, Frame } from './styles'

interface Props {
   children: ReactNode
}

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
}

type PropsInput = InputHTMLAttributes<HTMLInputElement>

function InputForm({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

InputForm.Input = function InputFormInput({ ...restProps }: PropsInput) {
   return <Input {...restProps} />
}

InputForm.Button = function InputFormButton({
   children,
   ...restProps
}: PropsButton) {
   return <Button {...restProps}>{children}</Button>
}

InputForm.Text = function InputFormText({ children }: { children: ReactNode }) {
   return <Text>{children}</Text>
}

InputForm.Icon = function InputFormIcon() {
   const SIZE = '1rem'
   return <ArrowRight width={SIZE} height={SIZE} />
}

InputForm.Label = function InputFormLabel({
   children
}: {
   children: ReactNode
}) {
   return <Label>{children}</Label>
}

InputForm.Frame = function InputFormFrame({
   children
}: {
   children: ReactNode
}) {
   return <Frame>{children}</Frame>
}

export default InputForm
