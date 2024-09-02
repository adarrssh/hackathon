import { Container } from '@mui/material'
import React from 'react'
import ai from '../../../assets/image/Ai.png'
import data from '../../../assets/image/Data.png'
import robot from '../../../assets/image/robot.png'

const Statistics = () => {
  return (
    <Container sx={{display:'flex', width:'300px', color:'white',width:'400px'}}>
        <Container sx={{  flex:'1', display:'flex', alignItems:'center'}}>
            <Container sx={{ backgroundColor:'white', height:'50px', width:'50px', borderRadius:'8px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={ai} alt="img" height={'25px'} width={'25px'}/>
            </Container>
        </Container>
        <Container sx={{  display:'flex', justifyContent:'center', flexDirection:'column', }}>
            <p style={{fontSize:'24px'}}>100K</p>
            <p style={{marginTop:'-15px'}}>AI Model Submissions</p>
        </Container>
    </Container>
  )
}

export default Statistics