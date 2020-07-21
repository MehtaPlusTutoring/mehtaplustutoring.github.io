import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import logo from './images/mehtapluslogo.png';
import './components.css';
import Home from './Home.js';
import Organizations from './Organizations.js'
import About from './About.js'
import Students from './Students.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const AntTabs = withStyles({
  root: {
    //borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 70,
    fontSize: 20,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(3),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  logophoto: {
    width:'75%',
    minWidth: '250px'
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  // eslint-disable-next-line
  var id = 0;
  if(window.location.pathname === "/about"){
    id=3;
  }
  else if(window.location.pathname === "/students"){
    id=1;
  }
  else if(window.location.pathname === "/organizations"){
    id=2;
  }
  else{
    id=0;
  }

  const [value, setValue] = React.useState(id);
  const handleChange = (event, newValue) => {
  setValue(newValue);
  };


  //href="/students" 
  //href="organizations" 
  //href="/about" 
  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
      <Router>
      <Grid container spacing={3}>
        <Grid item xs={5}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link to="/" onClick={handleChange}><img src={logo} alt="logo" className={classes.logophoto}/></Link>
        </Grid>
        <Grid item xs={7}>
            <br></br>
            <br></br>
            <AntTabs value={value} class="antabs" aria-label="ant example">  
            <AntTab disabled/>
            <AntTab href="/students" onChange={handleChange} label="Students & Parents"/>
            <AntTab href="organizations" onChange={handleChange} label="Organizations" />
            <AntTab href="/about" onChange={handleChange} label="About Us"/>
            </AntTabs>
        </Grid>
      </Grid>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
      </div>
  

      </div>    
  );
}

 //<br></br>
