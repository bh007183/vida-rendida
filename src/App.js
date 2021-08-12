import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./pages/contact";
import WhoWeAre from "./pages/whoWeAre";
import GetInvolved from "./pages/getInvolved";
import { GlobalProvider, useGlobalContext } from "./context/store";

import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <GlobalProvider>
      <Nav/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/getinvolved">
            <Contact />
          </Route>
          <Route exact path="/whoweare">
            <WhoWeAre />
          </Route>
          <Route exact path="/contact">
            <GetInvolved />
          </Route>
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
