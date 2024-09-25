import { Container } from '@mui/material'
import React from 'react'
import divider_img from '../../assets/image/Divider.png'
import './Divider.css'

const Divider = () => {
  return (
    <div className='grey-divider' style={{ width:'2px'}}>
        <img src={divider_img} alt="img" />
    </div>
  )
}

export default Divider