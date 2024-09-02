import { Card, Container } from '@mui/material'
import React from 'react'
import CardItem from './CardItem'

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
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </Container>

        </Container>
    )
}

export default Cards