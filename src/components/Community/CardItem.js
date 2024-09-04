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
            fontWeight:600,
            paddingTop:'10px',
            lineHeight:'50px',
            color:'#000',
            letterSpacing:'-0.72px'

          }}
        >

          {item.heading}
        </Container>
        <Container
         sx={{
          paddingTop:'10px',
          fontWeight:500,
          fontSize:'16px',
          color:'#64607D',
          lineHeight:'24px',
          letterSpacing:'-0.32px'
         }}
        >
          {item.subHeading}
        </Container>
      </Container>

    </Container>
  )
}

export default CardItem