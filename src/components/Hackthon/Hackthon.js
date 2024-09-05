import { Button, Card, Container } from "@mui/material";
import React from "react";
import Group1 from "../../assets/image/Group1.png";
import Tick from "../../assets/image/Tick.png";
import CountdownTimer from "./countdown";
import { useNavigate } from "react-router-dom";

const Hackthon = ({ item }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${item.id}`);
  };

  return (
    <Container
    onClick={handleClick}
    disableGutters
      sx={{
        width: "354px",
        height: "473px",
        borderRadius: "15px",
      }}
    >
      <Container
        disableGutters
        sx={{
          height: "174px",
          backgroundColor: "white",

          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <img
          src={item.imgUrl}
          height={"174px"}
          width={"354px"}
          style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
          alt="img"
        />
      </Container>

      <Container
        disableGutters
        sx={{
          height: "299px",
          backgroundColor: "white",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CountdownTimer item={item} />

        <Container
          sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
        >
          <Button
            sx={{
              backgroundColor: "#44924C",
              color: "black",
              textTransform: "none",
              borderRadius: "10px",
              width: "182px",
              height: "42px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Tick} alt="img" height={"20px"} />
            <p
              style={{
                color: "white",
                paddingLeft: "14px",
              }}
            >
              Participate Now
            </p>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Hackthon;
