import { Card, Container } from '@mui/material'
import React from 'react'
import CardItem from './CardItem'
import dataArr from './dataArr'

const Cards = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '20px',
                paddingBottom:'40px'

            }}
        >

            <Container
             sx={{
                display:'flex',
                flexWrap:'wrap',
                gap:4
             }}
            >

                {
                    dataArr.map((item,key)=>(
                        <CardItem key={key} item={item}/>
                    ))
                }
            </Container>

        </Container>
    )
}

export default Cards