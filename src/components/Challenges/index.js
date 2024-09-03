import { Button, Container } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const index = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#002A3B',
                paddingTop: '40px',
                paddingBottom: '40px'
            }}
        >
            <Container
                sx={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '28px',
                    fontWeight: 'bold',

                }}
            >
                Explore Challenges
            </Container>

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: '60px',
                    paddingBottom: '40px'
                }}
            >
                <Container
                    sx={{
                        backgroundColor: '#FFFFFF',
                        width: '85%',
                        borderRadius: '12px',
                        height: '50px'
                    }}
                >
                    1
                </Container>
                <Container
                    sx={{
                        width: '15%',
                    }}
                >
                    <Button
                        sx={{ backgroundColor: 'white', borderRadius: '12px', height: '50px', width: '100px', color: 'black' }}

                    >

                        <p>Filter</p>
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}

export default index