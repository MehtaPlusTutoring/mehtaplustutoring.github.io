import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import minilogo from './images/minilogo.jpg';
import classml20 from './images/classml20pic.png';
import world20 from './images/ml_world2020.png';

import {
    Link,
  } from "react-router-dom";

export default function MachineLearning() { 

    return (
        <>
        <center>
            <Container maxWidth= "sl">
            <Typography component="div" style={{ backgroundImage:"linear-gradient(to bottom right, #cfe8fc, #dcedfa)", height: '25vh' }}>
                <p style={{padding: '9vh', fontFamily: "Book Antiqua", fontSize:"45px"}}> Past Machine Learning Bootcamp Presentations </p>
            </Typography> 
            </Container>
            <p style={{fontSize:"30px", color:"#0047b3", lineHeight: "1.5"}}>Summer 2020 Presentations!</p>           
            <p style={{fontSize:"40px", color:"#0047b3", lineHeight: "1.5"}}>Fabulous Forty</p>
            <img src={classml20} alt="MLClass 2020" width="700px" />
            <p> All students and TAs not pictured!</p>
            <p style={{fontSize:"20px", color:"#0047b3", lineHeight: "1.5"}}> From all over the world!</p>
            <img src={world20} alt="MLClass World 2020" width="900px" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p style={{fontSize:"25px", lineHeight: "1.5"}}> Projects </p>
            <Grid container spacing={3}>
                <Grid item xs={1.0}> 
                </Grid>
                <Grid item xs> 
                    <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}>
                    <br></br>
                    <a style={{fontSize:"18px"}}><b>The Imitation Game: Style Transfer Generative Adversarial Networks for Non-Grand Chess Masters</b></a>
                    <br></br>
                    <br></br>
                    <a>Team </a>
                    <a>GANMasters: </a>
                    <a><i> Matthew M, Noah R, Gustavo S, Jeffrey W</i></a>
                    <br></br>
                    <br></br>
                        <a>Abstract: STGANs (Style Transfer Generative Adversarial Network) was previously applied to professional chess players in an attempt to imitate their style. However, we attempted to apply STGANs on to casual players instead, to see whether STGANs could successfully imitate casual players, due to casual chess players making more diverse and intricate decisions. We used one of the author’s friend’s chess games to train the STGANs model, and the author judged the model’s performance in a chess match based on how similar the style was to the author’s friend. We found that when the loss was increased, it began to more closely imitate the friend as well as improve at chess overall. However, as the loss got too great the model began copying moves from its training.</a>
                    <br></br>
                    <br></br>
                    <a target="_blank" href="https://mehtaplustutoring-mlbootcamp20.github.io/GanMasters/">Link to Website</a>
                    </div>
                </Grid>
                <Grid item xs={1.0}> 
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={1.0}> 
                </Grid>
                <Grid item xs> 
                    <div style={{ textAlign: "left", textJustify: "inter-word", lineHeight: "1.5"}}>
                    <br></br>
                    <a style={{fontSize:"18px"}}><b>Detecting Fake News using Support Vector Machines</b></a>
                    <br></br>
                    <br></br>
                    <a>Team </a>
                    <a> Real vs Fake News: </a>
                    <a><i> Bradley A, Rachel K, Rachel S, Jonathan S</i></a>
                    <br></br>
                    <br></br>
                        <a>Abstract: In recent years, fake news has emerged as a threat to credible, reliable news. Recent improvements in the capabilities of AI to generate fake news have made it easy to generate realistic but fake news articles that can misinform the public. To help differentiate between real and fake news articles, this paper proposes an SVM model that classifies articles with 89 percent accuracy based only off the title, and a 98 percent accuracy with the title and the first 1000 characters. This high level of accuracy could allow for systems that scan social media or other platforms quickly to flag suspicious articles.</a>
                    <br></br>
                    <br></br>
                    <a target="_blank" href="https://mehtaplustutoring-mlbootcamp20.github.io/Real_vs_Fake_News/">Link to Website</a>
                    </div>
                </Grid>
                <Grid item xs={1.0}> 
                </Grid>
            </Grid>

         </center>
        </>

  );
}

