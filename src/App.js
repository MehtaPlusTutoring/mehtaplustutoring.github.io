import React from 'react';
import './App.css';
import NavTabs from "./components/TabBar.js";
import Footer from "./components/Footer.js";
//import Box from '@material-ui/core/Box';
//<PageNavbar />
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home.js';
import Organizations from './components/Organizations.js'
import Students from './components/Students.js'
import About from './components/About.js'
import Research from './components/Research.js'
import Internship from './components/Internship.js'
import MachineLearning from './components/MachineLearning.js'

function App() {
  return (
    <>
      <Router>
        <NavTabs></NavTabs>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Switch>
          <Route path="/mlpast" render={MachineLearning}>
          </Route>
          <Route path="/research" render={Research}>
          </Route>
          <Route path="/internship" render={Internship}>
          </Route>
          <Route path="/students" render={Students}>
          </Route>
          <Route path="/about" render={About}>
          </Route>
          <Route path="/organizations" render={Organizations}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
        <Footer></Footer>

    </>
  );
}

export default App;
