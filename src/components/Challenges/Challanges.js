import { Button, Container, TextareaAutosize } from "@mui/material";

import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import search from "../../assets/image/carbon_search.png";
import SearchIcon from "@mui/icons-material/Search";
import DropdownWithBackdrop from "./DropDownButton";

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
      const arr = originalHackathonArr.filter((item)=> item.heading.includes(searchText));
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
          flexDirection: "row",

          paddingTop: "60px",
          paddingBottom: "40px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            // justifyContent:'center',
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            // backgroundColor: "yellow",
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
              // backgroundColor:"yellow",
              overflow: "hidden",
              marginLeft: "10px",
              color: "#858585",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 300,
              height: "20px",
              width: "90%",
              border: "none",
              outline: "none", // This removes the border color on focus
              resize: "none", // This disables the resize functionality
            }}
          />
        </Container>
        <Container
          sx={{
            width: "15%",
          }}
        >
          <DropdownWithBackdrop setHackathonArr={setHackathonArr} />
        </Container>
      </Container>
    </Container>
  );
};

export default Challenges;
