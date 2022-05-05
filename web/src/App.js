import { Route, Switch, BrowserRouter } from "react-router-dom";
import customTheme from "./theme";

import "./_app.styles.scss";

import Login from "./containers/login";
import Recommend from "./containers/recommend";
import { ThemeProvider } from "@mui/material";
import Appbar from "./components/Appbar/Appbar";
import UserManagement from "./containers/management/userManagement";
import VegetableManagement from "./containers/management/vegetableManagement";
import VegetableDetail from "./containers/vegetable/vegetableDetail";
import recipeDetail from "./containers/recipe/recipeDetail";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter history={history}>
        <Appbar />
        <Switch>
          <Route exact path="/" component={Recommend} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={UserManagement} />
          <Route exact path="/vegetable" component={VegetableManagement} />
          <Route
            exact
            path="/vegetable/:vegetableId"
            component={VegetableDetail}
          />
          <Route path="/recipe/:recipeId" component={recipeDetail} />
          <Route path="/vegetable/recipe/:recipeId" component={recipeDetail} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
