import React, { FC } from 'react'

/* Icons */
import ArrowRight from '../Icons/ArrowRight'

/* Styles */
import { Input, Container, Button, Text } from './styles'

interface Props {
   placeholder: string
   textButton: string
}

const InputForm: FC<Props> = ({ placeholder, textButton }: Props) => {
   return (
      <Container>
         <Input placeholder={placeholder} />
         <Button>
            <Text>{textButton}</Text>
            <ArrowRight width="1rem" height="1rem" />
         </Button>
      </Container>
   )
}

export default InputForm
