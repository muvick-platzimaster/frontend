import React, { FC, useState } from 'react'

/* Components */
import Plus from '../Icons/Plus'

/* Styles */
import { Container, Body, Button, IconContainer, Item, Text } from './styles'

interface Props {
   question: string
   answer: string
}

const Accordion: FC<Props> = ({ question, answer }: Props) => {
   const [toggleShowAnswer, setToggleShowAnswer] = useState<boolean>(false)

   return (
      <Container>
         <Item>
            <Button onClick={() => setToggleShowAnswer(!toggleShowAnswer)}>
               <Text>{question}</Text>
               <IconContainer theme={toggleShowAnswer}>
                  <Plus
                     width="2rem"
                     height="2rem"
                     transform={toggleShowAnswer ? 'rotate(135)' : 'rotate(0)'}
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