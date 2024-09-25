import { Button, Container } from "@mui/material";
import React from "react";
import rocket from "../../assets/image/rocket.png";
import yellow_rectangle from "../../assets/image/yello_rectangle.png";
import { useNavigate } from "react-router-dom";
import './Intro.css'

const Intro = ({ setHackathonArr }) => {

  const navigate = useNavigate();
  const addHackathon = () => {
    setHackathonArr((prev) => [
      ...prev,
      {
        index: 1,
        start_date: new Date("September 4, 2024 07:57:00"),
        end_date: new Date("September 4, 2024 14:35:00"),
        title: "Data Science 72 - Butterfly",
        subTitle: "Identification",
        imgUrl: "../../assets/cardimage/Group6.png",
      },
    ]);
  };

  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#003145" }}>

      <Container
        maxWidth={"xl"}
        sx={{ 
            height: {
             xs:"100vh",
             sm:'100vh',
             md:"100vh",
             lg:'561px'
            }, 
            display: "flex", 
            flexDirection:{
              xs:"column",
              md: "row"
              } 
            }}
      >
        <Container
          className="hero-left-div"
          sx={{
            position: "relative",
            paddingTop: {xs:"0px",md:"80px"},
            display: "flex",
            flex: "2",
            color: "white",
            flexDirection: "column",
          }}
        >
          <Container sx={{ position: "absolute", top: "130px" }}>
            <img  src={yellow_rectangle} alt="img" />
          </Container>
          <Container sx={{ width: "90%", marginBottom: "-30px"}}>
            <p className="hero-text">
              Accelerate Innovations <br /> with Global AI Challenges
            </p>
          </Container>
          <Container sx={{ width: "90%", textAlign: "left" }}>
            <p className="hero-descp-text">
              Al Challenges at DPhi simulate real-world problems. It is a great
              place to put your Al/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
          </Container>

          <Container sx={{ width: "90%", paddingTop: "20px" }}>
            <Button
              onClick={()=> navigate('/add')}
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "white",
                height: "47px",
                width: "198px",
                borderRadius: "18px",
                textTransform: "none",
                fontSize: "18px",
                padding:'15px 18px 14px 18px',
                fontStyle:'normal',
                fontWeight:600,
              }}
            >
              <p>Create Challenge</p>
            </Button>
          </Container>
        </Container>
        <Container
          className="hero-right-div"

          style={{
            // backgroundColor:'pink',
            display: "flex",
            flex: "1",
            justifyContent: {
              xs:"center",
             md:  "flex-start"
            },
            alignItems: "center",
          }}
        >
          <img className="hero-img" src={rocket}/>
        </Container>
      </Container>
    </Container>
  );
};

export default Intro;
