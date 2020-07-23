import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import minilogo from './images/minilogo.jpg';
import About from './About.js'

import {
    Link,
  } from "react-router-dom";

export default function Organizations() { 
    return (
      <>
      <center>
      <Container maxWidth= "sl">
      <Typography component="div" style={{ backgroundImage:"linear-gradient(to bottom right, #cfe8fc, #dcedfa)", height: '25vh' }}>
          <p style={{padding: '9vh', fontFamily: "Book Antiqua", fontSize:"45px"}}> Partnership Opportunities </p>
      </Typography> 
      </Container>
      <br></br>
        <br></br>
        <br></br>

        <Grid container spacing={3}>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{maxWidth: '250'}}>
                    <CardContent>
                        <img src={minilogo} alt="minilogo" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Clients </a> 
                    <a> We mentor high school students to deliver products for nonprofits, small-business at a low-cost. </a>
                </div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>

        <Grid container spacing={3}>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{maxWidth: '250'}}>
                    <CardContent>
                        <img src={minilogo} alt="minilogo" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Organizations for Social Good </a> 
                    <a> We partner up with organizations to hold free one-day technical workshops in underserved communities. </a>
                </div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        </center>
        </>

  );
}

