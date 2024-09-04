import { Container } from '@mui/material'
import React from 'react'
import data from './dataArr'
import SingleStatistics from './SingleStatistics'
import GreyDivider from '../Divider'

const Statistics = ({ item }) => {

  if (item.index % 2 == 0) {
    return (
      <GreyDivider />
    )
  } else {
    return <SingleStatistics item={item} />
  }
}

export default Statistics

