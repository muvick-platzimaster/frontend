import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* pages */
import Signin from "./pages/Signin";
import Home from "./pages/Home";

/* Styles */
import { GlobalStyle } from "./styles/GlobalStyle";
import "./styles/main.styl";
import Layout from "./components/Layout";
import Jumbotron from "./components/Jumbotron";

import jumboData from "./components/Jumbotron/jumboData.json";

const App: React.FC = (): JSX.Element => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Layout>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Signin} />
                  <Route exact path="/signup" component={Signin} />
                  <Route exact path="/movies"></Route>
               </Switch>
            </Layout>
         </Router>
      </>
   );
};

export default App;
