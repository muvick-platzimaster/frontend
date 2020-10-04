import React from 'react'
import { Container, Image, Item, Button, LinkButton } from './styles'

interface Props {
   linkTo?: string
   children: React.ReactNode
   background?: string
   src?: any
   onClick?: any
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
MyList.Button = function MyListItem({ children, ...restProps }: Props) {
   return <Button {...restProps}>{children}</Button>
}

MyList.LinkButton = function MyListItem({ children, ...restProps }: Props) {
   return <LinkButton {...restProps}>{children}</LinkButton>
}

export default MyList
