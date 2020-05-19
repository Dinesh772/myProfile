import React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./eCommerceApp/components/home";
import eCommerceRoutes from "./eCommerceApp/routes/eCommerceRoutes";
import { Provider } from "mobx-react";
import stores from "./eCommerceApp/stores";
import SignInPage from "./authentication/components/SignInRoute";
import PracticeAdvancedConceptsRoute from "./common/routes/PracticeAdvancedConceptsRoute/index";

class App extends React.Component{
  render(){
  return (
    <Provider {...stores}>
      <HashRouter>
        <Switch>
          {eCommerceRoutes}
          <Route path='/ecommerce-store/sign-in' component={SignInPage} />
          <Route path='/practice-advanced-concepts'>
            <PracticeAdvancedConceptsRoute />
          </Route>
          <Route path="/">
          <Home />  
          </Route>
          </Switch>
      </ HashRouter>
    </Provider>
  );
  }
}

export {App}
