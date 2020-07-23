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
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Project-Based Bootcamps</a> 
                    <a> We teach skills that are in-demand in the real world in our college-leveled project-based bootcamps for high school students. We strongly believe that students only truly master the material taught to them, once they apply the skills that they have learned. There are two tracks within our bootcamps - research based and internship based. </a>
                    <br></br>
                    <br></br>
                    <a>In our research-focused bootcamps, students work in groups to pursue a student-led research project. At the end of the bootcamp, students are expected to present their research in a poster session, write a conference-style research paper and publish their code to GitHub because of our commitment to open-source software movement. </a>
                    <a><Link to="/research" style={{color:"#0047b3"}}>Learn More >>></Link></a>
                    <br></br>
                    <br></br>
                    <a>In our internship-focused bootcamps, students intern at one of our partner organizations. Students are expected to deliver a final product on a tight deadline based on skills that they have learned and the features desired by the organization. </a>
                    <a><Link to="/internship" style={{color:"#0047b3"}}>Learn More >>></Link></a>
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
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}>
                    <a style={{color:"#0047b3", fontSize:"20px"}}> College Consulting </a> 
                    <a> Our consulting services are all-encompassing and provide custom guidance to students. We help students plan their coursework, suggest extracurricular opportunities based on their interests and help them determine what they are looking for in a college. We review college essays and prepare them for college interviews.</a>
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
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Standardized Test Preparation </a> 
                <a>We coach students on PSAT, SAT, SAT Subject, ACT and AP Exams.</a>
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
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Subject Tutoring</a> <a>We tutor students on school subjects by helping students completing their homework and making sure their understanding of the subject material is crystal clear.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        </center>
        </>

  );
}

