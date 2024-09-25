import { Container } from '@mui/material'
import React from 'react'
import './SingleStatistics.css'

const SingleStatistics = ({item}) => {

    return (
        <Container  className='single-statistics-div'  sx={{ display: 'flex', width: '350px', color: 'white'}}>
            <Container disableGutters sx={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                <Container disableGutters sx={{ backgroundColor: 'white', height: '50px', width: '50px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={item?.imgUrl} alt="img" height={'25px'} width={'25px'} />
                </Container>
            </Container>
            <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', lineHeight: '0' }}>
                <Container sx={{ height: '30px' }}>
                    <p style={{ fontSize: '24px', fontStyle:"normal", fontWeight:700, }}>{`${item?.heading}`}</p>
                </Container>
                <Container>
                    <p className='stats-sub-heading'  >{`${item?.subHeading}`}</p>
                </Container>
            </Container>
        </Container>
    )
}

export default SingleStatistics