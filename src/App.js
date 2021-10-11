import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./pages/contact";
import WhoWeAre from "./pages/whoWeAre";
import GetInvolved from "./pages/getInvolved";
import { GlobalProvider} from "./context/store";
import Container from '@material-ui/core/Container';

import Nav from "./components/Nav"

function App() {
  return (
   
    <Router>
      <GlobalProvider>
        <Container maxWidth="lg">
      <Nav/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/costa-rica-mission-trips">
          <GetInvolved />
           
          </Route>
          <Route exact path="/who-we-are">
            <WhoWeAre />
          </Route>
          <Route exact path="/contact">
          <Contact />
          </Route>
        </Switch>
        </Container>
      </GlobalProvider>
    </Router>
  );
}

export default App;
