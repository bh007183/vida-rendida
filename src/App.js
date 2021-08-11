import logo from './logo.svg';
import './App.css';
import Home from "./pages/home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {GlobalProvider, useGlobalContext} from "./context/store"
import Nav from "./components/Nav"

function App() {
  return (
   
    <Router>
     
      
    <GlobalProvider>
    
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

    </Switch>

    </GlobalProvider>
    
    </Router>
   
    
  );
}

export default App;
