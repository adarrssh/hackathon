import { Container } from '@mui/material'
import React from 'react'

const Heading = () => {
  return (
    <Container
        sx={{
            textAlign:'center',
            fontWeight:'bold',
            paddingTop:'40px'
        }}
    >
        <p style={{
            fontSize:'32px'
        }}>Why Participate in <span style={{color:'#0FA958'}}>AI Challenges</span></p>
    </Container>
  )
}

export default Heading