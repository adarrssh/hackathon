
import React from 'react'
import ResponsiveAppBar from './AppBar'
import Intro from './Intro'
import Stats from './stats/Index'
import Cards from '../Community/Cards'
import Heading from '../Community/Heading'
const Home = () => {
  return (
    <>
     <ResponsiveAppBar/>   
     <Intro/>
     <Stats/>
     <Heading/>
     <Cards/>
    </>
  )
}

export default Home