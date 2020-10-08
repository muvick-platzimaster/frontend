import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search as SearchIcon } from '../Icons'
import { ModalMovies } from '../'
import Axios, { AxiosError } from 'axios'

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
   Label,
   SwitchButton,
   Text
} from './styles'

/* Contants */
import ROUTES from '../../constants/routes'
import { ApiResponse } from '../../interfaces'

/* i18n */
import { useTranslation } from 'react-i18next'
import { MyListContext } from '../../context/MyListContext'
import { SwitchContext } from '../../context/SwitchContext'
import config from '../../config'
import { TOKEN } from '../../constants/itemsLocalStorage'

/* Types */
interface Props {
   linkTo?: string
   children: React.ReactNode
   background?: string | null
   error404?: boolean
}

interface PropsLinkButton {
   children: React.ReactNode
   linkTo: string
}

interface PropsContent {
   children: React.ReactNode
   notFound: boolean
}
interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode
}
interface PropsWithChildren {
   children: React.ReactNode
}

function Nav({ children, background }: Props): JSX.Element {
   return <Container theme={{ background }}>{children}</Container>
}

Nav.Grid = function NavGrid({ children }: PropsWithChildren) {
   return <Grid>{children}</Grid>
}

Nav.Logo = function NavLogo() {
   return (
      <Link to={ROUTES.HOME}>
         <Logo />
      </Link>
   )
}

Nav.Text = function NavText({ children }: Props) {
   return <Text>{children}</Text>
}

Nav.LinkButton = function NavLinkButton({ children, linkTo }: PropsLinkButton) {
   return <LinkButton to={linkTo}>{children}</LinkButton>
}

Nav.Button = function NavButton({ children, ...props }: PropsButton) {
   return <Button {...props}>{children}</Button>
}

Nav.SwitchButton = function NavSwitchButton({
   children,
   ...props
}: PropsButton) {
   return <SwitchButton {...props}>{children}</SwitchButton>
}

Nav.Content = function NavContent({ children, notFound }: PropsContent) {
   return <Content theme={{ notFound }}>{children}</Content>
}

Nav.Search = function NavSearch() {
   const { t, i18n } = useTranslation(['search'])
   const ICON_SIZE = '100%'
   const [value, setValue] = useState('')
   const [findedMovies, setfindedMovies] = useState<ApiResponse | null>(null)
   const isValid = value !== ''
   const [modalIsOpen, setIsOpen] = useState(false)
   const [error, setError] = useState<AxiosError | null>(null)
   const { actions } = useContext(MyListContext)
   const { switchValue } = useContext(SwitchContext)

   const {
      Close,
      Title,
      Description,
      Item,
      PlayButton,
      RowContainer,
      IconsContainer,
      Buttton
   } = ModalMovies
   const handleClick = () => {
      if (!value) return
      setError(null)
      setfindedMovies(null)

      // TODO: Cambiar este endpoint y controlar el cancelToken
      const URL = `/${switchValue}?query=${value}&language=${i18n.language}&page=1`
      Axios({
         baseURL: config.API_URL_SERVER,
         url: URL,
         method: 'GET',
         headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` }
      })
         .then(({ data }) => setfindedMovies(data))
         .catch((err: AxiosError) => {
            setError(err)
         })
   }

   return (
      <SearchContainer>
         <Search
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={
               t('search:text', 'Search') +
               ' ' +
               t(`nav:${switchValue === 'movies' ? switchValue : 'tvshows'}`)
            }
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
            <Title>
               {t('search:text', 'Search')}:{' '}
               {error ? error.response?.data.message : value}
            </Title>
            <Close setIsOpen={setIsOpen} />
            <RowContainer>
               {findedMovies?.results?.length !== 0
                  ? findedMovies?.results?.map((movie) => (
                     <Item
                        key={movie.id}
                        background={movie.poster_path}
                        hidden={!movie.poster_path}
                     >
                        <Title>{movie.title}</Title>
                        <Description>{movie.overview}</Description>
                        <IconsContainer>
                           <PlayButton
                              to={`browse/${movie.title ? 'movie' : 'tv'}/${
                                 movie.id
                              }`}
                           >
                              {t('search:play', 'Play')}
                           </PlayButton>
                           <Buttton
                              onClick={() => {
                                   actions?.addMovieToMyList({
                                      movieId: movie.id,
                                      switchValue: switchValue || 'movies'
                                   })
                              }}
                           >
                                +
                           </Buttton>
                        </IconsContainer>
                     </Item>
                  ))
                  : t('search:nothing', 'No hubo resultados...')}
            </RowContainer>
         </ModalMovies>
      </SearchContainer>
   )
}

export default Nav
