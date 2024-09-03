import { Box, Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import logo from '../../assets/image/skill.svg';



const CardItem = ({item}) => {

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
      disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'flex-start',
        }}
      >
        <Container>
          <img src={item?.imgUrl} height={'40px'} alt="logo" />
        </Container>
        <Container
          sx={{
            fontSize:'24px',
            fontWeight:'bold',
            paddingTop:'10px'
          }}
        >

          {item.heading}
        </Container>
        <Container
         sx={{
          paddingTop:'10px',
          fontWeight:'light'
         }}
        >
          {item.subHeading}
        </Container>
      </Container>

    </Container>
  )
}

export default CardItem