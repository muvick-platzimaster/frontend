import React, { useEffect, useState, Suspense } from 'react'
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom'

/* pages */
import { Home, Signin, Browse, Signup, NotFoundPage } from './pages/'

/* Styles */
import { GlobalStyle } from './styles/GlobalStyle'

/* Components */
import { Player, Fallback } from './components/'

/* Constants */
import ROUTES from './constants/routes'

/* Context */
import { SwitchContext, SwitchState } from './context/switchContext'

const App: React.FC = () => {
   const [user, setUser] = useState(() => {
      return localStorage.getItem('TOKEN') || null
   })
   useEffect(() => {
      window.addEventListener('storage', () => {
         setUser(localStorage.getItem('TOKEN') || null)
      })

      return () =>
         window.removeEventListener('storage', () => {
            setUser(localStorage.getItem('TOKEN') || null)
         })
   }, [])

   const [switchValue, setSwitchValue] = useState(SwitchState.MOVIES)

   return (
      <Suspense
         fallback={
            <Fallback>
               <Fallback.Spinner />
            </Fallback>
         }
      >
         <SwitchContext.Provider value={{ switchValue, setSwitchValue }}>
            <GlobalStyle />
            <Router>
               <Switch>
                  <Route exact path={ROUTES.HOME}>
                     {user ? <Redirect to={ROUTES.BROWSE} /> : <Home />}
                  </Route>
                  <Route exact path={ROUTES.SIGN_IN}>
                     {user ? <Redirect to={ROUTES.BROWSE} /> : <Signin />}
                  </Route>
                  <Route exact path={ROUTES.BROWSE}>
                     {user ? <Browse /> : <Redirect to={ROUTES.SIGN_IN} />}
                  </Route>
                  <Route exact path={ROUTES.SIGN_UP}>
                     {user ? <Redirect to={ROUTES.BROWSE} /> : <Signup />}
                  </Route>
                  <Route exact path={ROUTES.MOVIE}>
                     {user ? <Player /> : <Redirect to={ROUTES.SIGN_IN} />}
                  </Route>
                  <Route component={NotFoundPage} />
               </Switch>
            </Router>
         </SwitchContext.Provider>
      </Suspense>
   )
}

export default App
