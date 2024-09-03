import { Button, Container } from '@mui/material'
import React from 'react'
import rocket from '../../assets/image/rocket.png';
import yellow_rectangle from '../../assets/image/yello_rectangle.png';


const Intro = () => {
    return (
        <Container maxWidth={false} sx={{ backgroundColor: '#003145' }}>
            <Container maxWidth={'xl'} sx={{ height: '80vh', display: 'flex', flexDirection: 'row' }}>
                <Container sx={{  position: 'relative', paddingTop: '80px',  display: 'flex', flex:'2' , color: 'white', flexDirection: 'column' }}>
                    <Container sx={{ position: 'absolute', top:'130px' }}>
                        <img src={yellow_rectangle} alt="img" />
                    </Container>
                    <Container style={{ width: '90%', marginBottom: '-30px'}}>

                        <p style={{ fontSize: '48px', fontWeight: 'bold' }}>Accelerate Innovations <br /> with Global AI Challenges</p>
                    </Container>
                    <Container  style={{ width:'90%',  textAlign:'left'}}>

                        <p style={{ fontSize: '20px' }} >Al Challenges at DPhi simulate real-world problems. It is a great place to put your Al/Data Science skills to test on diverse datasets allowing you to foster learning through  competitions.</p>

                    </Container>

                    <Container style={{ width: '90%', paddingTop: '20px' }}>

                        <Button variant="contained" sx={{ color: 'black', backgroundColor: 'white', height: '45px',width:'200px', borderRadius: '0.5rem', textTransform: 'none',  fontSize:'18px' }}>Create Challenge</Button>
                    </Container>
                </Container>
                <Container style={{ display: 'flex',flex:'1', justifyContent:'flex-start', alignItems:'center' }}>
                    <img src={rocket} height={'400px'} />
                </Container>
            </Container>
        </Container>
    )
}

export default Intro