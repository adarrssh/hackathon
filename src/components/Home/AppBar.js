import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import navbarImage from '../../assets/image/navbar.png';

function ResponsiveAppBar() {
  return (
    <Container  maxWidth={'xl'} sx={{ height:'64px', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
      <img src={navbarImage} alt="navbar" height={40} />
    </Container>
  );
}

export default ResponsiveAppBar;
