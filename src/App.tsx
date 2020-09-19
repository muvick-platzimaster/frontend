import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* pages */
import { Home, Signup, Browse } from './pages/'

/* Styles */
import { GlobalStyle } from './styles/GlobalStyle'
import './styles/main.styl'

/* Components */
/* import Layout from './components/Layout' */

/* Constants */
import ROUTES from './constants/routes'
import routes from './constants/routes'

const App: React.FC = () => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Switch>
               <Route exact path={ROUTES.HOME} component={Home} />
               <Route exact path={ROUTES.SIGN_UP} component={Signup} />
               <Route exact path={ROUTES.BROWSE} component={Browse} />
            </Switch>
         </Router>
      </>
   )
}

export default App
