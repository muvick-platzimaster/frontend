import React, { createContext, ReactNode, useContext, useState } from 'react'

/* Components */
import Plus from '../Icons/Plus'

/* Styles */
import {
   Container,
   Body,
   Button,
   IconContainer,
   Item,
   Text,
   Frame,
   Title
} from './styles'

interface Context {
   toggleShow: boolean
   setToggleShow: React.Dispatch<React.SetStateAction<boolean>>
}
export const ToggleContext = createContext<Partial<Context>>({})

type PropsWithChildren = { children: ReactNode }

const Accordion = ({ children }: PropsWithChildren): JSX.Element => {
   return <Container>{children}</Container>
}

Accordion.Item = function AccordionItem({ children }: PropsWithChildren) {
   const [toggleShow, setToggleShow] = useState(false)

   return (
      <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
         <Item>{children}</Item>
      </ToggleContext.Provider>
   )
}

Accordion.Text = function AccordionText({ children }: PropsWithChildren) {
   return <Text>{children}</Text>
}

Accordion.Frame = function AccordionFrame({ children }: PropsWithChildren) {
   return <Frame>{children}</Frame>
}

Accordion.IconContainer = function AccordionIconContainer() {
   const ICON_SIZE = '2rem'
   const { toggleShow } = useContext(ToggleContext)

   return (
      <IconContainer>
         <Plus
            width={ICON_SIZE}
            height={ICON_SIZE}
            transform={`rotate(${toggleShow ? '135' : '0'})`}
         />
      </IconContainer>
   )
}

Accordion.Button = function AccordionButton({ children }: PropsWithChildren) {
   const { setToggleShow, toggleShow } = useContext(ToggleContext)

   const handleClick = () => {
      setToggleShow && setToggleShow(!toggleShow)
   }

   return <Button onClick={handleClick}>{children}</Button>
}

Accordion.Body = function AccordionBody({ children }: PropsWithChildren) {
   const { toggleShow } = useContext(ToggleContext)

   return <Body hidden={!toggleShow}>{children}</Body>
}

Accordion.Title = function AccordionTitle({ children }: PropsWithChildren) {
   return <Title>{children}</Title>
}

export default Accordion
