import "./App.css";
import Home from "./components/Home";
import Finished from "./components/Finished";
// import WIP from "./components/WIP";
// import Doodles from "./components/Doodles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SchoolScout from "./components/SchoolScout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Finished />
        </Route>
        <Route path="/recentwork">
          <SchoolScout />
        </Route>
        {/* <Route path="/wip">
          <WIP />
        </Route>
        <Route path="/doodles">
          <Doodles />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
