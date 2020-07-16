import React from 'react';
import './App.css';
import NavTabs from "./components/TabBar.js";
import stockimg from './view_computer.png';
//import Box from '@material-ui/core/Box';
//<PageNavbar />

function App() {
  return (
    <>
      <NavTabs></NavTabs>
      <br></br>
      <img class = "stockpic" src={stockimg} alt="Viewing Computer"/>
    </>
  );
}

export default App;
