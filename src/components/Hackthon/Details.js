import { Button, Container } from '@mui/material'
import React from 'react'
import level from '../../assets/image/level.jpg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Details = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    backgroundColor: '#003145',
                    height: "419px"
                }}
            >
                <div
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', width: '818px', height: '228px', marginLeft: '100px' }}
                >
                    <div
                        style={{ backgroundColor: '#FFCE5C', display:'flex', justifyContent:'flex-start',alignItems:'center',  width: '464px',height:'34px', borderRadius:'5px', paddingLeft:'20px'}}
                    >
                        <AccessTimeIcon/>
                       <p style={{paddingLeft:'10px', paddingTop:'2px', fontSize:'14px'}}> Starts on 17th Jun'22 09:00 PM (India Standard Time)</p>
                    </div>

                    <div
                        style={{  fontSize: '40px' , paddingTop:'24px', color:'white', fontWeight:'bold'}}
                    >
                        Data Sprint 72 - Butterfly Identification
                    </div>

                    <div
                        style={{ paddingTop:'33px', color:'white'}}
                    >
                        Identify the class to which each butterfly belongs to                    </div>

                    <div
                        style={{  width: '464px', paddingTop:"24px" }}
                    >
                        <Button sx={{width:'102px', height:'34px', backgroundColor:'white',color:'black',textTransform:'none', borderRadius:'5px'}}>
                            
                            <img src={level} alt="" />
                            <p style={{paddingTop:"4px", paddingLeft:'5px'}}>Easy</p>
                        </Button>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Details