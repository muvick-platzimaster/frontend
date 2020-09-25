import React, { ButtonHTMLAttributes, ReactNode } from 'react'

/* Styles */
import { Container, Section, Title, Image, Text, Detail, Tag } from './styles'

interface Props {
   children: ReactNode
}

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
}
interface PropsImage {
   background: string
}

function SimilarCard({ children }: Props): JSX.Element {
   return <Container>{children}</Container>
}

SimilarCard.Section = function SimilarCardSection({
   children
}: {
   children: ReactNode
}) {
   return <Section>{children}</Section>
}

SimilarCard.Title = function SimilarCardTitle({
   children
}: {
   children: ReactNode
}) {
   return <Title>{children}</Title>
}

SimilarCard.Text = function SimilarCardText({
   children
}: {
   children: ReactNode
}) {
   return <Text>{children}</Text>
}

SimilarCard.Tag = function SimilarCardTag({
   children,
   ...restProps
}: PropsButton) {
   return <Tag {...restProps}>{children}</Tag>
}

SimilarCard.Detail = function SimilarCardDetail({
   children
}: {
   children: ReactNode
}) {
   return <Detail>{children}</Detail>
}

SimilarCard.Image = function SimilarCardSection({
   background,
   ...restProps
}: PropsImage) {
   return <Image theme={{ background }} {...restProps} />
}

export default SimilarCard
