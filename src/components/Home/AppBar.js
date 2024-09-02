import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import navbarImage from '../../assets/image/navbar.png';

function ResponsiveAppBar() {
  return (
    <AppBar position="static" elevation={0} color='white' sx={{height:'64px'}}>
      <Container maxWidth="xl" sx={{ml:5, padding:1}}>
        <img src={navbarImage} alt="navbar" height={40} />
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
