import React from 'react'
import { Container, Image, Item } from './styles'

interface Props {
   linkTo?: string
   children: React.ReactNode
   background?: string
   src?: any
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

export default MyList
