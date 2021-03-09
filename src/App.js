import "./App.css";
import Home from "./components/Home";
import Finished from "./components/Finished";
import WIP from "./components/WIP";
import Doodles from "./components/Doodles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/finished">Finished</Link>
        <Link to="/wip">WIP</Link>
        <Link to="/doodles">Doodles</Link>
      </div>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/finished">
          <Finished />
        </Route>
        <Route path="/wip">
          <WIP />
        </Route>
        <Route path="/doodles">
          <Doodles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
