import { Container, Button } from "@mui/material";
import React from "react";
import level from "../../assets/image/level.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import rectangle from "../../assets/image/green_rectangle.png";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with the necessary plugins
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);



const Details = ({hackathonArr, setHackathonArr}) => {

  const formatDate = (date) => {
    if (!date) return '';
    
    // Format the date as '17th Jun'22 09:00 PM'
    return dayjs(date).format('D MMM\'YY hh:mm A');
  };

  const navigate = useNavigate()
  const {id} = useParams();

  const item = hackathonArr.find((element)=> element.id == id)


  const deleteHackathon = () =>{
    const filterArr = hackathonArr.filter((element)=> element.id != id);
    setHackathonArr(filterArr);
    navigate('/')
  }

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          backgroundColor: "#003145",
          height: "419px",
        }}
      >
        <Container maxWidth={"xl"} sx={{}}>
          <Container
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              height: "228px",
              marginLeft: "100px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFCE5C",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "464px",
                height: "34px",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
            >
              <AccessTimeIcon />
              <p
                style={{
                  paddingLeft: "10px",
                  paddingTop: "2px",
                  fontSize: "14px",
                }}
              >
                {" "}
                Starts on {formatDate(item.startDate)} (India Standard Time)
              </p>
            </div>

            <div
              style={{
                fontSize: "40px",
                paddingTop: "24px",
                color: "white",
                fontWeight: "bold",
              }}
            >
             {item.heading}
            </div>

            <div style={{ paddingTop: "33px", color: "white" }}>
              Identify the class to which each butterfly belongs to
            </div>

            <div style={{ width: "464px", paddingTop: "24px" }}>
              <Button
                sx={{
                  width: "102px",
                  height: "34px",
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  borderRadius: "5px",
                }}
              >
                <img src={level} alt="" />
                <p style={{ paddingTop: "4px", paddingLeft: "5px" }}>{item.difficulty}</p>
              </Button>
            </div>
          </Container>
        </Container>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          border: "0.3px solid #DDE6ED",
          borderBlockColor: " var(--B10, #FFF)",
          boxShadow: "0px 6px 12px 0px #DDE6ED",
          height: "66px",
        }}
      >
        <Container
          disableGutters
          maxWidth={"xl"}
          sx={{
            height: "66px",
            // backgroundColor: "pink",
            paddingLeft: "120px",
          }}
        >
          <Container
            disableGutters
            maxWidth={"xl"}
            sx={{
              display: "flex",
              height: "66px",
              // backgroundColor:'red'
            }}
          >
            <Container
              sx={{
                position: "relative",
                // backgroundColor: 'yellow',
                // paddingLeft: '100px'
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "161.8%",
                  paddingTop: "5px",
                }}
              >
                Overview
              </p>

              <img
                style={{ position: "absolute", bottom: "2px", left: "5px" }}
                src={rectangle}
                alt=""
              />
            </Container>
            <Container
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                alignContent: "space-around",
              }}
            >
              <Button
                onClick={()=>navigate(`/edit/${id}`)}
                style={{
                  display: "flex",
                  width: "91px",
                  height: "37px",
                  padding: "10px 0px 9px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "10px",
                  background: "#44924C",
                  color: "white",
                  marginRight: "18px",
                  textTransform: "none",
                }}
              >
                Edit
              </Button>
              <Button
                onClick={deleteHackathon}
                style={{
                  display: "flex",
                  width: "91px",
                  height: "37px",
                  padding: "10px 22px 9px 23px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: "0",
                  borderRadius: "10px",
                  border: "1.2px solid #DC1414",
                  color: "#DC1414",
                  textTransform: "none",
                  marginRight: "50px",
                }}
              >
                Delete
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>

      <Container
        maxWidth={"xl"}
        sx={{
          // backgroundColor: 'pink',
          flexShrink: 0,
          paddingTop: "50px",
        }}
      >
        <Container
          disableGutters
          sx={{
            width: "956px",
            height: "332px",
            marginLeft: "100px",
            //  backgroundColor:"yellow" ,

            color: "#64607D",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStretch: "normal",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "-0.36px",
          }}
        >
          <p>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </Container>
      </Container>
    </>
  );
};

export default Details;
