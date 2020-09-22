import styled from 'styled-components'

type Props = { maxWidth?: string }

export const WrapperStyled = styled.div`
   width: 100%;
   max-width: ${(props: Props) => props.maxWidth};
   margin-left: auto;
   margin-right: auto;
   padding: 0 1rem;
`
