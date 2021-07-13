import SignIn from "./components/SignIn";
import Create from "./components/Create";
import SignUpDetails from "./components/SignUpDetails";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Create />
        </Route>
        <Route exact path="/signin">
        <SignIn />
        </Route>
        <Route exact path="/signupdetail">
        <SignUpDetails />
        </Route>
        <Route exact path="/dashboard">
        <Dashboard />
        </Route>
      </Switch>
      


    </div>
    </Router>
  );
}

export default App;
