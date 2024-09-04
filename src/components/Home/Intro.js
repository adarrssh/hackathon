import { Button, Container } from "@mui/material";
import React from "react";
import rocket from "../../assets/image/rocket.png";
import yellow_rectangle from "../../assets/image/yello_rectangle.png";

const Intro = ({ setHackathonArr }) => {
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
            height: "561px", 
            display: "flex", 
            flexDirection: "row" ,
            // backgroundColor:'grey'
        }}
      >
        <Container
          sx={{
            position: "relative",
            paddingTop: "80px",
            display: "flex",
            flex: "2",
            color: "white",
            flexDirection: "column",
            // backgroundColor:'green'
          }}
        >
          <Container sx={{ position: "absolute", top: "130px" }}>
            <img src={yellow_rectangle} alt="img" />
          </Container>
          <Container sx={{ width: "90%", marginBottom: "-30px", 
            // backgroundColor:"pink" 
            }}>
            <p style={{ fontSize: "48px", fontWeight: 600, lineHeight:"56px", fontFamily:'poppins' }}>
              Accelerate Innovations <br /> with Global AI Challenges
            </p>
          </Container>
          <Container sx={{ width: "90%", textAlign: "left" }}>
            <p style={{ fontSize: "20px" }}>
              Al Challenges at DPhi simulate real-world problems. It is a great
              place to put your Al/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
          </Container>

          <Container sx={{ width: "90%", paddingTop: "20px" }}>
            <Button
              onClick={addHackathon}
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
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src={rocket} height={"400px"} />
        </Container>
      </Container>
    </Container>
  );
};

export default Intro;
