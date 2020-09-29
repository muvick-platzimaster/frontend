import React, { FC } from 'react'

/* Styles */
import { Container, Image } from './styles'

interface Props {
   image: string
   title: string
}

const Lists: FC<Props> = (props: Props) => {
   const { image, title } = props

   return (
      <Container>
         <Image src={image} alt={title} loading="lazy" />
      </Container>
   )
}

export default Lists
