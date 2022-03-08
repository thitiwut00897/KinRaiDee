import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import customTheme from "./theme";

import './_app.styles.scss';

import Login from './containers/login';
import Recommend from './containers/recommend'
import { ThemeProvider } from "@mui/material";
import Appbar from "./components/Appbar/Appbar";
import UserManagement from "./containers/management/userManagement";
import VegetableManagement from "./containers/management/vegetableManagement";
import VegetableDetail from "./containers/vegetable/vegetableDetail";
import recipeDetail from "./containers/recipe/recipeDetail"

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Router basename='/'>
        <Appbar />
        <Switch>
          <Route exact path="/" component={Recommend} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={UserManagement} />
          <Route path="/vegetable" component={VegetableManagement} />
          <Route path="/vegetable/:id" component={VegetableDetail} />
          <Route path="/recipe/:recipeId" component={recipeDetail} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;