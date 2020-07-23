import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import minilogo from './images/minilogo.jpg';
import About from './About.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

export default function Research() { 

    return (
        <>
        <center>
        <Container maxWidth= "sl">
        <Typography component="div" style={{ backgroundImage:"linear-gradient(to bottom right, #cfe8fc, #dcedfa)", height: '25vh' }}>
            <p style={{padding: '9vh', fontFamily: "Book Antiqua", fontSize:"45px"}}> Research-Based Bootcamps </p>
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
                        <img src={minilogo} alt="minilogo"/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
            <Grid item xs> 
                <br></br>
                <br></br>
                <br></br>
                <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Machine Learning Bootcamp</a> 
                    <a> is a 6-week course that meets for 4 hours each week-day covering undergraduate machine learning topics, including theory and applications. Students are introduced to Rule-Based Systems, k-nearest neighbors, Support Vector Machines, Perceptron, Classification vs. Regression, Neural Networks, Convolutional Neural Networks, Markov Decision Processes, Reinforcement Learning, Recurrent Neural Networks, Natural Language Processing, Generative Adversarial Networks and k-means. We also discuss the ethical implications of machine learning. </a>
                    <br></br>
                    <br></br>
                    <a> Students learn basics of Python and Python libraries such as NumPy, SciPy, Pandas, scikit-learn, TensorFlow, Keras, PyTorch, NLTK, Spacy, Gensim and Matplotlib as well as web development skills (HTML, CSS, JavaScript). Good coding practices are taught and enforced in the camp as students are introduced to different text editors, virtual environment, using Terminal/Command Line and Github.</a>
                    <br></br>
                    <br></br>
                    <a> Students are assigned homework each day that reviews the math or coding skills they learned in camp that day. Towards the end of the bootcamp, they will complete a mini machine learning project in pairs and a final machine learning project of their choosing in teams of 3-4, that they will then present. </a>
                    <a><Link to="/mlpast" style={{color:"#0047b3"}}>View Past Presentations Here >>></Link></a>
                </div>
                <br></br>
                <br></br>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        </center>
        </>

  );
}

