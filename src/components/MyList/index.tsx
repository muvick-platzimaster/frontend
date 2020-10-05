import React from 'react'
import { Container, Image, Item, Button, LinkButton } from './styles'

interface Props {
   linkTo?: string
   children: React.ReactNode
   background?: string
   src?: string
}

interface PropsLinkButton {
   to: string
   children: React.ReactNode
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
}

type PropsImage = React.ImgHTMLAttributes<HTMLImageElement>

function MyList({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

MyList.Image = function MyListImage({ ...restProps }: PropsImage) {
   return <Image {...restProps} />
}
MyList.Item = function MyListItem({ children }: Props) {
   return <Item>{children}</Item>
}
MyList.Button = function MyListItem({ children, ...restProps }: PropsButton) {
   return <Button {...restProps}>{children}</Button>
}

MyList.LinkButton = function MyListItem({
   children,
   to,
   ...restProps
}: PropsLinkButton) {
   return (
      <LinkButton to={to} {...restProps}>
         {children}
      </LinkButton>
   )
}

export default MyList
