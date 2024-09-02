import { Container } from '@mui/material'
import React from 'react'
import Statistics from './Statistics'

const Index = () => {
  return (
    <Container maxWidth={false} sx={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', backgroundColor:'#002A3B' , height:'200px'}}>
        <Statistics/>
        <Statistics/>
        <Statistics/>
    </Container>
  )
}

export default Index