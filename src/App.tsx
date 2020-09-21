import React from 'react'
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom'

/* pages */
import { Home, Signin, Browse, Signup } from './pages/'

/* Styles */
import { GlobalStyle } from './styles/GlobalStyle'
import './styles/main.styl'

/* Components */
/* import Layout from './components/Layout' */

/* Constants */
import ROUTES from './constants/routes'

const App: React.FC = () => {
   const user = {}

   return (
      <>
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
            </Switch>
         </Router>
      </>
   )
}

export default App
