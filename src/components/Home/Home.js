
import React from 'react'
import Intro from './Intro'
import Stats from './stats/Index'
import Community from '../Community/Index'
import Challenges from '../Challenges/Challanges'
import Hackathon from '../Hackthon/index'
const Home = ({hackathonArr,setHackathonArr}) => {
  return (
    <>
     <Intro setHackathonArr={setHackathonArr}/>
     <Stats/>
     <Community/>
     <Challenges hackathonArr={hackathonArr} setHackathonArr={setHackathonArr}/>
     <Hackathon hackathonArr={hackathonArr}/>
    </>
  )
}

export default Home