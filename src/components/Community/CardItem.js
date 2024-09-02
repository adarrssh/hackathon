import { Box, Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import logo from '../../assets/image/skill.svg';



const CardItem = () => {
  return (
    <Container sx={{
      width: '550px',
      height: '276px',
      backgroundColor: '#F8F9FD',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:'20px'


    }}>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'flex-start',
        }}
      >
        <Container>
          <img src={logo} alt="logo" />
        </Container>
        <Container
          sx={{
            fontSize:'24px',
            fontWeight:'bold',
            paddingTop:'10px'
          }}
        >

          Prove your skills
        </Container>
        <Container
         sx={{
          paddingTop:'10px',
          fontWeight:'light'
         }}
        >
        Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
        </Container>
      </Container>

    </Container>
  )
}

export default CardItem