import { Button, Card, Container } from '@mui/material'
import React from 'react'
import Group1 from '../../assets/image/Group1.png'
import Tick from '../../assets/image/Tick.png'

const Hackthon = () => {
  return (
    <Container
    disableGutters
     sx={{
        width:'354px',
        height:'473px',
        borderRadius:'15px',
     }}
    >
        <Container
        disableGutters
         sx={{
            height:'174px',
            backgroundColor:'pink',

            borderTopLeftRadius:'15px',
            borderTopRightRadius:'15px'
         }}
        >
            <img src={Group1} alt="img"/>
        </Container>
        <Container
        disableGutters
         sx={{
            height:'299px',
            backgroundColor:'white',
            borderBottomRightRadius:'15px',
            borderBottomLeftRadius:'15px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
         }}
        >

            <Container
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    paddingBottom:'10px'
                }}
            >
                <Button
                sx={{
                    backgroundColor:'#F2C94C40',
                    color:'black',
                    textTransform:'none',
                    height:'20px',
                    fontSize:'12px'
                }}
                >
                    Upcoming
                </Button>
            </Container>

          
            <Container
            sx={{textAlign:'center'}}
            >

            <p style={{
                fontSize:'16px',
                fontWeight:'bold'
            }}>Data Science Bootcamp - <br /> Graded Datathon</p>
            
            </Container>


            <Container 
                sx={{textAlign:'center', marginTop:'-10px'}}
            >
                <p style={{fontSize:'14px'}}>Starts in</p>
            </Container>

            <Container
                sx={{textAlign:'center', marginTop:'-25px'}}

            >
                <p style={{fontSize:'18px', fontWeight:'bold'}}>00 : 15 : 22</p>
            </Container>
            <Container
                sx={{textAlign:'center', marginTop:'-25px'}}

            >
                <p style={{fontSize:'10px'}}>Days    Hours    Mins</p>
            </Container>


            <Container
                sx={{display:'flex',justifyContent:'center',paddingTop:'20px'}}
            >
            <Button
                sx={{
                    backgroundColor:'#44924C',
                    color:'black',
                    textTransform:'none',
                    borderRadius:'10px',
                    width:'182px',
                    height:'40px',
                }}
                >
                    <img src={Tick} alt="img"  height={'20px'}/>
                    <p
                    style={{
                        color:'white',
                        paddingLeft:'10px'
                    }}
                    >
                        Participate Now
                    </p>
                </Button>
            </Container>

        </Container>
    </Container>
  )
}

export default Hackthon