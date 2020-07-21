import React from 'react'
import hpm from './images/haripriya.png';
import bpm from './images/bhagirath.png';
import marwa from './images/marwa.jpg';
import andrea from './images/andrea.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import facebook from './images/facebook.png';
import gmail from './images/gmail.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
export default function About() { 
    return (
        <>
        <center>
        <Container maxWidth= "sl">
        <Typography component="div" style={{ backgroundImage:"linear-gradient(to bottom right, #cfe8fc, #dcedfa)", height: '25vh' }}>
            <p style={{padding: '8vh', fontFamily: "Book Antiqua", fontSize:"45px"}}> Who We Are </p>
        </Typography> 
        </Container>
        <br></br>
        <Grid container spacing={3}>
            <Grid item xs={1}> 
            </Grid>
            <Grid item lg>
                <p style={{fontSize:"20px", lineHeight: "1.5"}}> MehtA+ Tutoring was founded in 2012 by Mehta sibling duo! Inspired by their great-great-grandfather who taught princesses in India and started his own school, the Mehta siblings started MehtA+ Tutoring to share their love for learning. In high school, both siblings received a 5 on the AP Calculus BC exam (12th grade course) in 8th grade, were valedictorians of their high school, received 36 on their ACTs, were National Merit Finalists, are award-winning authors in a prestigious social science journal and cofounded a club where they applied engineering skills for social good.</p>
                <i><p style={{fontSize:"30px", fontFamily: "Book Antiqua", color:"#0047b3", lineHeight: "1.5"}}>"No such thing as bad student, only bad teacher."</p></i>
                <i><p style={{fontSize:"20px", fontFamily: "Book Antiqua", color:"#0047b3", textAlign:"inherit", transform: "translateX(30%)", lineHeight: "1.5"}}>- Mr. Miyagi, The Karate Kid</p></i>
                <p style={{fontSize:"20px", lineHeight: "1.5"}}> We expect the same discipline, dedication and determination from our instructors, as we do from our students. Our A+ instruction not only prepares students to get accepted to their dream colleges, but also more importantly thrive in their dream colleges. The MehtA+ Tutoring teaching team has taught more than 300 students who have received 30+ scores on their ACT, perfect scores on SAT subject tests, learned some of the most in-demand skills in the job market and have been admitted to some of the top most universities in the countries such as Harvard, Princeton, Cornell, UPenn, Carnegie Mellon, Johns Hopkins and UIUC.</p>     
            </Grid>
            <Grid item xs={1}> 
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                <p style={{fontSize:"30px", color:"#0047b3", lineHeight: "1.5"}}><u>Meet the Co-founders!</u></p>
            </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
            <Grid item xs>
                <br></br>
                <img src={hpm} alt="hpm" width="400"/>
            </Grid>
            <Grid item xs> 
                <div style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Haripriya Mehta </a> <a>graduated from MIT in four years with a Bachelors and Masters in Electrical Engineering and Computer Science and a Minor in Music. Her master's thesis was on Secure Inference of Quantized Neural Networks and has worked on award-winning research, such as Paper Dreams: an Interactive Interface for Generative Visual Expression. </a><br></br><br></br><a>Her internship and research experiences are quite varied and include Amazon Audible, Argonne National Lab, HealthJoy and Nordstrom, MIT Media Lab, MIT MTL and MIT Biomimetics Lab among other places. She received several job offers from companies like Google, Goldman Sachs and Disney Streaming Services, etc. At MIT, she was President of Society of Women Engineers, one of the largest organizations on campus, where she began several STEM related initiatives.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
            <Grid item xs>
                <br></br>
                <img src={bpm} alt="bpm" width="275"/>
            </Grid>
            <Grid item xs> 
                <div style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Bhagirath Mehta </a> <a>is a rising junior double majoring in Electrical Engineering and Computer Science at Stanford University. He is part of IEEE, the Stanford Space Initiative Biology Devices team, Data Science Grassroots Ecology team and Fascinate. Recently, he led the Stanford Trading Team and won first place in the Citadel Securities Algorithmic Trading competition at the International Rotman Trading Competition, beating 50 teams from all over the world. He has interned at Amazon and Microsoft as a software development engineer. </a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                <p style={{fontSize:"30px", color:"#0047b3"}}><u>Meet our Team!</u></p>
            </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
            <Grid item xs>
                <br></br>
                <img src={marwa} alt="marwa" width="250"/>
            </Grid>
            <Grid item xs> 
                <div style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Marwa Al Alawi</a> <a>graduated from MIT with a degree in Mechanical Engineering. In high school, she placed first nationally in Bahrain and received the Crown Prince International Scholarship, allowing her to continue her studies in the US. At MIT, she worked on Virtual Reality research at the Device Realization Lab. She also interned in a Japanese gaming company, where she developed a virtual reality game for Japan’s National Space Agency, JAXA. Marwa is interested in developing user experiences for gaming and XR, speaks Arabic, English, and Japanese fluently, and is a professional comic artist.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={3}>
            <Grid item xs>
                <br></br>
                <img src={andrea} alt="andrea" width="225"/>
            </Grid>
            <Grid item xs> 
                <div style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.5"}}><a style={{color:"#0047b3", fontSize:"20px"}}> Andrea Jaba </a> <a>graduated from MIT with a degree in Computer Science. She has interned at NCSOFT in South Korea and Computime in Hong Kong and researched at MIT Decentralized Information Group. At MIT, she was Co-President of Southeast Asian Service Leadership Network.</a></div>
            </Grid>
            <Grid item xs={1.0}> 
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                <p style={{fontSize:"30px", color:"#0047b3", lineHeight: "1.5"}}><u>Connect with Us!</u></p>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs>
                <a href="mailto:hpm.mehtaplustutoring@gmail.com" target="_blank"><img src={gmail} alt="gmail" width="120"/></a>
            </Grid>
            <Grid item xs> 
                <a href="https://www.facebook.com/mehtaplus/" target="_blank"><img src={facebook} alt="facebook" width="100"/></a>
            </Grid>
            <Grid item xs> 
                <a href="https://www.instagram.com/mehtaplus/" target="_blank"><img src={instagram} alt="instagram" width="100"/></a>
            </Grid>
            <Grid item xs> 
                <a href="https://twitter.com/MehtATutoring" target="_blank"><img src={twitter} alt="twitter" width="100"/></a>
            </Grid>
            <Grid item xs> 
            </Grid>
        </Grid>
        </center>
        </>
  );
}

//<img src={bpm} alt="bpm" width="300"/>
