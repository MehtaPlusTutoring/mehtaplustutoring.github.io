import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() { 
    return (
      <>
      <center>
      <Container maxWidth= "sl">
      <Typography component="div" style={{ backgroundImage:"linear-gradient(to bottom right, #cfe8fc, #dcedfa)", height: '10vh' }}>
          <p style={{fontSize:"15px", lineHeight: "0.2"}}>&nbsp;</p>
          <p style={{fontSize:"15px", lineHeight: "0.3"}}> MehtA+ Tutoring </p>
          <p style={{fontSize:"15px", lineHeight: "0.3"}}> Contact us at hpm.mehtaplustutoring@gmail.com</p>
          <p style={{fontSize:"15px", lineHeight: "0.3"}}> MehtA+ Tutoring is not affiliated with any universities.  </p>
      </Typography> 
      </Container>
      </center>
      </>
  );
}

