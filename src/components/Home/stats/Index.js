import { Container, Divider } from '@mui/material'
import React from 'react'
import Statistics from './Statistics'
import GreyDivider from '../Divider'
import dataArr from './dataArr'
import SingleStatistics from './SingleStatistics'
import './SingleStatistics.css'

const Index = () => {
  return (
    <Container className='stats-container-parent'  maxWidth={false} sx={{ backgroundColor: '#002A3B'}}>
      <Container className='stats-container' maxWidth={'xl'}>

        {
          dataArr.map((item,key) => (
            <Statistics key={key} item={item}/>
          ))
        }
      </Container>
    </Container>
  )
}

export default Index