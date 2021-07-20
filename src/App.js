import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Views/Home";
import Html from "./components/Views/Html";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/html">
          <Html />
        </Route>
        <Route exact path="/css">
          <Home />
        </Route>
        <Route exact path="/js">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
