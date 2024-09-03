import { Container } from '@mui/material'
import React from 'react'
import ai from '../../../assets/image/Ai.png'
import data from '../../../assets/image/Data.png'
import robot from '../../../assets/image/robot.png'

const Statistics = () => {
  return (
    <Container sx={{display:'flex', width:'350px', color:'white'}}>
        <Container disableGutters sx={{  flex:'1', display:'flex', alignItems:'center'}}>
            <Container disableGutters sx={{ backgroundColor:'white', height:'50px', width:'50px', borderRadius:'8px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={ai} alt="img" height={'25px'} width={'25px'}/>
            </Container>
        </Container>
        <Container disableGutters sx={{  display:'flex',flexDirection:'column', lineHeight:'0'}}>
          <Container sx={{height:'30px'}}>
            <p style={{fontSize:'24px'}}>100K</p>
          </Container>
          <Container >
            <p >AI Model Submissions</p>
          </Container>
        </Container>
    </Container>
  )
}

export default Statistics