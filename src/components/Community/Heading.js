import { Container } from '@mui/material'
import React from 'react'
import './Heading.css'

const Heading = () => {
  return (
    <Container
        sx={{
            textAlign:'center',
            fontWeight:'bold',
            paddingTop:'40px'
        }}
    >
        <p
        className='comm-heading'>Why Participate in <span style={{color:'#0FA958'}}>AI Challenges?</span></p>
    </Container>
  )
}

export default Heading