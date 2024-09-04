import { Container } from '@mui/material'
import React from 'react'
import Hackthon from './Hackthon'
import CountdownTimer from './countdown'

const index = () => {
  return (
    <Container
    disableGutters
    maxWidth={false}
     sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#003145',
        paddingTop:'100px',
        paddingBottom:'100px'
        
     }}
    >
        <Container
        sx={{
            display:'flex',
            flexWrap:'wrap',
            gap:5,
        }}
        >

       
        <Hackthon/>
        <Hackthon/>
        <Hackthon/>
        <Hackthon/>
        <Hackthon/>
        <Hackthon/>
        {/* <CountdownTimer/> */}
        </Container>
    </Container>
  )
}

export default index