
import React from 'react'
import ResponsiveAppBar from './AppBar'
import Intro from './Intro'
import Stats from './stats/Index'
import Cards from '../Community/Cards'
import Heading from '../Community/Heading'
import Challenges from '../Challenges/index'
import Hackathon from '../Hackthon/index'
const Home = () => {
  return (
    <>
     <ResponsiveAppBar/>   
     <Intro/>
     <Stats/>
     <Heading/>
     <Cards/>
     <Challenges/>
     <Hackathon/>
    </>
  )
}

export default Home