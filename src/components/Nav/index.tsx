import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search as SearchIcon } from '../Icons'

/* Styles */
import {
   Container,
   LinkButton,
   Grid,
   Logo,
   Content,
   Button,
   Search,
   SearchContainer,
   Label
} from './styles'

/* Contants */
import ROUTES from '../../constants/routes'

// type PropsWithChildren = { children: ReactNode }

interface Props {
   linkTo?: string
   children: React.ReactNode
   background?: string
}

interface PropsLinkButton {
   children: React.ReactNode
   linkTo: string
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
}

function Nav({ children, background }: Props): JSX.Element {
   return <Container background={background}>{children}</Container>
}

Nav.Grid = function NavGrid({ children }: Props) {
   return <Grid>{children}</Grid>
}

Nav.Logo = function NavLogo() {
   return (
      <Link to={ROUTES.HOME}>
         <Logo />
      </Link>
   )
}

Nav.LinkButton = function NavLinkButton({ children, linkTo }: PropsLinkButton) {
   return <LinkButton to={linkTo}>{children}</LinkButton>
}

Nav.Button = function NavButton({ children, ...props }: PropsButton) {
   return <Button {...props}>{children}</Button>
}

Nav.Content = function NavContent({ children }: Props) {
   return <Content>{children}</Content>
}

Nav.Search = function NavSearch() {
   const ICON_SIZE = '100%'
   const [value, setValue] = useState('')
   const [findedMovies, setfindedMovies] = useState(null)
   const isValid = value !== ''

   const handleClick = () => {
      if (!value) return
      const API_KEY = 'ad7bc0ccac5da809744fb1fe94ccd84c'
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${value}`

      fetch(URL)
         .then((res) => res.json())
         .then((data) => setfindedMovies(data))
   }

   return (
      <SearchContainer>
         <Search
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Search..."
         />
         <Label disabled={!isValid} onClick={handleClick}>
            <SearchIcon color="white" width={ICON_SIZE} height={ICON_SIZE} />
         </Label>
         {findedMovies && <p>Movies</p>}
      </SearchContainer>
   )
}

export default Nav
