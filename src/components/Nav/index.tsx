import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search as SearchIcon } from '../Icons'
import { ModalMovies } from '../'
import axios, { AxiosError } from 'axios'

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
import { ApiResponse } from '../../interfaces'

/* i18n */
import { useTranslation } from 'react-i18next'

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
   const { t } = useTranslation(['search'])
   const ICON_SIZE = '100%'
   const [value, setValue] = useState('')
   const [findedMovies, setfindedMovies] = useState<ApiResponse | null>(null)
   const isValid = value !== ''
   const [modalIsOpen, setIsOpen] = useState(false)
   const [error, setError] = useState<AxiosError | null>(null)

   const handleClick = () => {
      if (!value) return
      const API_KEY = 'ad7bc0ccac5da809744fb1fe94ccd84c'
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${value}`

      axios({
         url: URL,
         method: 'GET'
      })
         .then(({ data }) => setfindedMovies(data))
         .catch(setError)
   }

   if (error) return <h1>{error.message}</h1>

   return (
      <SearchContainer>
         <Search
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={t('search:text', 'Search')}
         />
         <Label
            disabled={!isValid}
            onClick={() => {
               handleClick()
               setIsOpen(true)
            }}
         >
            <SearchIcon color="white" width={ICON_SIZE} height={ICON_SIZE} />
         </Label>
         <ModalMovies isOpen={modalIsOpen}>
            <ModalMovies.Title>
               {t('search:text', 'Search')}: {value}
            </ModalMovies.Title>
            <ModalMovies.Close setIsOpen={setIsOpen} />
            <ModalMovies.RowContainer>
               {findedMovies?.results?.map((movie) => (
                  <ModalMovies.Item
                     key={movie.id}
                     background={movie.poster_path}
                  >
                     <ModalMovies.Title>{movie.title}</ModalMovies.Title>
                     <ModalMovies.Description>
                        {movie.overview}
                     </ModalMovies.Description>
                     <ModalMovies.PlayButton
                        to={`browse/${movie.title ? 'movie' : 'tv'}/${
                           movie.id
                        }`}
                     >
                        {t('search:play', 'Play')}
                     </ModalMovies.PlayButton>
                  </ModalMovies.Item>
               ))}
            </ModalMovies.RowContainer>
         </ModalMovies>
      </SearchContainer>
   )
}

export default Nav
