import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import marwa from './images/marwa.jpg';


export default function Students() { 

    return (
        <>
        <center>
        <Container maxWidth= "sl">
        <Typography component="div" style={{ backgroundImage:"linear-gradient(to bottom right, #cfe8fc, #dcedfa)", height: '25vh' }}>
            <p style={{padding: '9vh', fontFamily: "Book Antiqua", fontSize:"45px"}}> Student Offerings </p>
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
                <Card style={{maxWidth: '250'}}>
                    <CardContent>
                        <img src={marwa} alt="marwa" width="250"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Project Based Bootcamps</a> <a>give students an opportunity to apply the skills that they have learned.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>


        <Grid container spacing={3}>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs>
                <br></br>
                <Card style={{maxWidth: '250'}}>
                    <CardContent>
                        <img src={marwa} alt="marwa" width="250"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> College Consulting </a> <a>give students an opportunity to apply the skills that they have learned.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>

        <Grid container spacing={3}>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs>
                <br></br>
                <Card style={{maxWidth: '250'}}>
                    <CardContent>
                        <img src={marwa} alt="marwa" width="250"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Standardized Test Preparation </a> <a>give students an opportunity to apply the skills that they have learned.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>

        <Grid container spacing={3}>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs>
                <br></br>
                <Card style={{maxWidth: '250'}}>
                    <CardContent>
                        <img src={marwa} alt="marwa" width="250"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Subject Tutoring</a> <a>give students an opportunity to apply the skills that they have learned.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        </center>
        </>
  );
}

