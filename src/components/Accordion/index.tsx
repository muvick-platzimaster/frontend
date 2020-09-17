import React, { FC, useState } from 'react'

/* Components */
import Plus from '../Icons/Plus'

/* Styles */
import { Container, Body, Button, IconContainer, Item, Text } from './styles'

interface Props {
   question: string
   answer: string
}

const Accordion: FC<Props> = ({
   question = 'Hola mundo',
   answer = 'sopdhjasiodjasohd'
}: Props) => {
   const [toggleShowAnswer, setToggleShowAnswer] = useState<boolean>(false)

   return (
      <Container>
         <Item>
            <Button onClick={() => setToggleShowAnswer(!toggleShowAnswer)}>
               <Text>{question}</Text>
               <IconContainer theme={toggleShowAnswer}>
                  <Plus
                     width="32"
                     height="32"
                     transform={toggleShowAnswer ? 'rotate(45)' : 'rotate(0)'}
                  />
               </IconContainer>
            </Button>
         </Item>
         <Body hidden={!toggleShowAnswer}>
            <Text>{answer}</Text>
         </Body>
      </Container>
   )
}

export default Accordion
