import { Container, Divider } from '@mui/material'
import React from 'react'
import Statistics from './Statistics'
import GreyDivider from '../Divider'

const Index = () => {
  return (
    <Container maxWidth={false} sx={{backgroundColor:'#002A3B' , height:'200px'}}>
    <Container maxWidth={'xl'} sx={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', backgroundColor:'#002A3B' , height:'200px'}}>

        <Statistics/>
        <GreyDivider />
        <Statistics/>
        <GreyDivider />
        <Statistics/>
       </Container>
    </Container>
  )
}

export default Index