import { Button, Container, TextareaAutosize } from "@mui/material";

import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import search from "../../assets/image/carbon_search.png";
import SearchIcon from "@mui/icons-material/Search";
import DropdownWithBackdrop from "./DropDownButton";
import './Challenges.css'

const Challenges = ({ hackathonArr ,setHackathonArr }) => {

  const [searchText, setSearchText] = useState('')
  const [originalHackathonArr, setOriginalHackathonArr] = useState(hackathonArr)

  const handleChange = (e) =>{
    setSearchText(e.target.value)
  }

  useEffect(()=>{

    if(searchText  === ''){
      setHackathonArr(originalHackathonArr)
    }else{
      const arr = originalHackathonArr.filter((item)=> item.heading.toLowerCase().includes(searchText.toLowerCase()));
      setHackathonArr(arr);
    }
  },[searchText])

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#002A3B",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Explore Challenges
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs:"column",
            md:"row"
          },
          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            width: "85%",
            borderRadius: "12px",
            height: "50px",
          }}
        >
          <img src={search} alt="" />
          <textarea
          onChange={handleChange}
            placeholder="search"
            value={searchText}
            style={{
              overflow: "hidden",
              marginLeft: "10px",
              color: "#858585",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 300,
              height: "20px",
              width: "90%",
              border: "none",
              outline: "none", 
              resize: "none", 
            }}
          />
        </Container>
        <Container
          sx={{
            paddingTop:{
              xs:'10px',
              md:'0px'
            },
            width: {
              xs:'90%',
              md:'15%'
            },
          }}
        >
          <DropdownWithBackdrop hackathonArr={hackathonArr} originalHackathonArr={originalHackathonArr} setHackathonArr={setHackathonArr} />
        </Container>
      </Container>
    </Container>
  );
};

export default Challenges;
