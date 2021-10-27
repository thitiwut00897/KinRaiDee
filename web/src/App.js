import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Management from './containers/management';
import Login from './containers/login';
import Recommend from './containers/recommend'
// import './App.scss';

const App = () => {
  return (
    <Router basename='/'>
      <Switch>
          <Route exact path="/" component={Recommend} />
          <Route path="/login" component={Login} />
          <Route path="/management" component={Management} />
      </Switch>
  </Router>
  );
}

export default App;