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

function Accordion({ children }: { children: ReactNode }): JSX.Element {
   return <Container>{children}</Container>
}

Accordion.Item = function AccordionItem({ children }: { children: ReactNode }) {
   const [toggleShow, setToggleShow] = useState(false)

   return (
      <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
         <Item>{children}</Item>
      </ToggleContext.Provider>
   )
}

Accordion.Text = function AccordionText({ children }: { children: ReactNode }) {
   return <Text>{children}</Text>
}

Accordion.Frame = function AccordionFrame({
   children
}: {
   children: ReactNode
}) {
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

Accordion.Button = function AccordionButton({
   children
}: {
   children: ReactNode
}) {
   const { setToggleShow, toggleShow } = useContext(ToggleContext)

   const handleClick = () => {
      setToggleShow && setToggleShow(!toggleShow)
   }

   return <Button onClick={handleClick}>{children}</Button>
}

Accordion.Body = function AccordionBody({ children }: { children: ReactNode }) {
   const { toggleShow } = useContext(ToggleContext)

   return <Body hidden={!toggleShow}>{children}</Body>
}

Accordion.Title = function AccordionTitle({
   children
}: {
   children: ReactNode
}) {
   return <Title>{children}</Title>
}

export default Accordion
