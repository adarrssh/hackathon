import { Button, Container } from '@mui/material'
import React from 'react'
import rocket from '../../assets/image/rocket.png';


const Intro = () => {
    return (
        <>
            <Container maxWidth={false} sx={{ backgroundColor: '#003145', height: '80vh', display: 'flex', flexDirection: 'row' }}>
                <Container sx={{ paddingLeft: '10', display: 'flex', color: 'white', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                    <Container style={{ width: '90%', marginBottom: '-30px' }}>

                        <p style={{ fontSize: '48px' }}>Accelerative Innovations with Global AI Challenges</p>
                    </Container>
                    <Container style={{ width: '90%' }}>

                        <p style={{ fontSize: '18px' }} >Al Challenges at DPhi simulate real-world problems. It is a great place to put your Al/Data Science skills to test on diverse datasets allowing you to foster learning through  competitions.</p>
                    </Container>

                    <Container style={{ width: '90%', paddingTop: '20px' }}>

                        <Button variant="contained" sx={{ color: 'black', backgroundColor: 'white', height: '40px', borderRadius: '0.5rem', textTransform: 'none' }}>Create Challenge</Button>
                    </Container>
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={rocket} height={'400px'} />
                </Container>
            </Container>
        </>
    )
}

export default Intro