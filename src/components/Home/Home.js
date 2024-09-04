
import React from 'react'
import ResponsiveAppBar from './AppBar'
import Intro from './Intro'
import Stats from './stats/Index'
import Community from '../Community/Index'
import Challenges from '../Challenges/index'
import Hackathon from '../Hackthon/index'
const Home = ({hackathonArr,setHackathonArr}) => {
  return (
    <>
     <ResponsiveAppBar/>   
     <Intro setHackathonArr={setHackathonArr}/>
     <Stats/>
     <Community/>
     <Challenges/>
     <Hackathon hackathonArr={hackathonArr}/>
    </>
  )
}

export default Home