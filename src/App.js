// import logo from "./logo.svg";
// import hero from "./assets/home/hero.png";
// import green from "./assets/home/green.png";
// import pink from "./assets/home/pink.png";
// import yellow from "./assets/home/yellow.png";
import "./App.css";
// import ImageLink from "./components/ImageLink";
import Home from "./components/Home";
import Finished from "./components/Finished";
import WIP from "./components/WIP";
import Doodles from "./components/Doodles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
