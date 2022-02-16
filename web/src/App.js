import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import theme from "./theme";

import './_app.styles.scss';

import Login from './containers/login';
import Recommend from './containers/recommend'
import { ThemeProvider } from "@mui/material";
import Appbar from "./components/Appbar/Appbar";
import UserManagement from "./containers/management/userManagement";
import VegetableManagement from "./containers/management/vegetableManagement";
import VegetableDetail from "./containers/vegetable/vegetableDetail";
import CreateVegetable from './containers/vegetable/createVegetable';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename='/'>
        <Appbar />
        <Switch>
          <Route exact path="/" component={Recommend} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={UserManagement} />
          <Route path="/vegetable" component={VegetableManagement} />
          <Route path="/detail" component={VegetableDetail} />
          <Route path="/create" component={CreateVegetable} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;