import React, { useState, Suspense } from 'react'
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom'

/* pages */
import {
   Home,
   Signin,
   Browse,
   Signup,
   NotFoundPage,
   UserVerification,
   MyList
} from './pages/'

/* Styles */
import { GlobalStyle } from './styles/GlobalStyle'

/* Components */
import { Player, Fallback } from './components/'

/* Constants */
import ROUTES from './constants/routes'

/* Context */
import { SwitchContext, SwitchState } from './context/SwitchContext'
import MyListContextProvider from './context/MyListContext'

/* Hooks */
import useGetToken from './hooks/useGetToken'

const App: React.FC = () => {
   const { token } = useGetToken()
   const [switchValue, setSwitchValue] = useState<SwitchState>('movies')

   return (
      <Suspense
         fallback={
            <Fallback>
               <Fallback.Spinner />
            </Fallback>
         }
      >
         <MyListContextProvider>
            <SwitchContext.Provider value={{ switchValue, setSwitchValue }}>
               <GlobalStyle />
               <Router>
                  <Switch>
                     <Route exact path={ROUTES.HOME}>
                        {token ? <Redirect to={ROUTES.BROWSE} /> : <Home />}
                     </Route>
                     <Route exact path={ROUTES.SIGN_IN}>
                        {token ? <Redirect to={ROUTES.BROWSE} /> : <Signin />}
                     </Route>
                     <Route exact path={ROUTES.BROWSE}>
                        {token ? <Browse /> : <Redirect to={ROUTES.SIGN_IN} />}
                     </Route>
                     <Route exact path={ROUTES.SIGN_UP}>
                        {token ? <Redirect to={ROUTES.BROWSE} /> : <Signup />}
                     </Route>
                     <Route exact path={ROUTES.MOVIE}>
                        {token ? <Player /> : <Redirect to={ROUTES.SIGN_IN} />}
                     </Route>
                     <Route exact path={ROUTES.MY_LIST}>
                        {token ? <MyList /> : <Redirect to={ROUTES.SIGN_IN} />}
                     </Route>
                     <Route exact path={ROUTES.VERIFY}>
                        {token ? (
                           <UserVerification />
                        ) : (
                           <Redirect to={ROUTES.SIGN_IN} />
                        )}
                     </Route>
                     <Route component={NotFoundPage} />
                  </Switch>
               </Router>
            </SwitchContext.Provider>
         </MyListContextProvider>
      </Suspense>
   )
}

export default App
