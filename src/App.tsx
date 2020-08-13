import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* pages */
import Signin from "./pages/Signin";
import Home from "./pages/Home";

/* Styles */
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = (): JSX.Element => {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/login" component={Signin} />
            </Switch>
         </Router>
      </>
   );
};

export default App;
