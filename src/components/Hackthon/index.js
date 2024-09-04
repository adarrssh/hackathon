import { Container } from '@mui/material'
import React from 'react'
import Hackthon from './Hackthon'
import CountdownTimer from './countdown'
import dataArr from './dataArr'

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
          
        {
          dataArr.map((item,key)=>

            <Hackthon key={key} item={item}/>
          )
        }
      
        </Container>
    </Container>
  )
}

export default index