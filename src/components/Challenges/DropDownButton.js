import React, { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
  Backdrop,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FilterList } from "@mui/icons-material";

export default function DropdownWithBackdrop({
  hackathonArr,
  setHackathonArr,
  originalHackathonArr,
}) {
  const [filteredList, setFilteredList] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterCondition, setFilterCondition] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (filteredList.length == 0) {
      setHackathonArr(originalHackathonArr);
    }else{
        const recentAppliedCondition = filteredList[filteredList.length-1];
        console.log(recentAppliedCondition)
        addFilterCondition(recentAppliedCondition)
    }
  }, [filteredList]);



  const addFilterCondition = (condition) => {

    let arr = [];
    if(filteredList.length > 1){
        arr = [...hackathonArr]
    }

    if (condition === "Easy") {

      let filterArr = originalHackathonArr.filter(
        (item) => item.difficulty == "Easy"
      );
      arr.push(...filterArr);

    } else if (condition === "Medium") {

      let filterArr = originalHackathonArr.filter(
        (item) => item.difficulty == "Medium"
      );
      arr.push(...filterArr);

    } else if (condition === "Hard") {

      let filterArr = originalHackathonArr.filter(
        (item) => item.difficulty == "Hard"
      );
      arr.push(...filterArr);

    }

    setHackathonArr([...arr]);
  };

  // const removeFilterCondition = (condition) => {
  //     console.log(condition)
  //     let filterConditionArr = filterCondition.filter((item)=> item.difficulty != condition);
  //     setFilterCondition(filterCondition)
  //     let arr = [];

  //     // if(condition === 'Easy'){
  //     //     let filterArr = hackathonArr.filter((item)=>item.difficulty == 'Easy');
  //     //     console.log(filterArr)
  //     //     arr.push(...filterArr)
  //     // }

  //     // if(condition === 'Medium'){
  //     //     let filterArr = hackathonArr.filter((item)=>item.difficulty == 'Medium');
  //     //     arr.push(...filterArr)
  //     // }

  //     // if(condition === 'Hard'){
  //     //     let filterArr = hackathonArr.filter((item)=>item.difficulty == 'Hard');
  //     //     arr.push(...filterArr)
  //     // }

  //     if(condition === 'Easy'){
  //         let filterArr = originalHackathonArr.filter((item)=>item.difficulty == 'Easy');
  //         console.log(filterArr)
  //         arr.push(...filterArr)
  //     }

  //     if(condition === 'Medium'){
  //         let filterArr = originalHackathonArr.filter((item)=>item.difficulty == 'Medium');
  //         arr.push(...filterArr)
  //     }

  //     if(condition === 'Hard'){
  //         let filterArr = originalHackathonArr.filter((item)=>item.difficulty == 'Hard');
  //         arr.push(...filterArr)
  //     }

  //     console.log(arr)

  //     setHackathonArr(arr)
  // }

  const handleToggle = (value) => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
      setFilteredList((prev)=>[...prev,value])
    } else {
      // removeFilterCondition(value)
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems(newChecked);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          display: "flex",
          backgroundColor: "white",
          width: "130px",
          height: "50px",
          color: "black",
          textTransform: "none",
          borderRadius: "12px",
        }}
      >
        <Container>
          <p style={{ fontSize: "18px" }}>Filter</p>
        </Container>
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          disableGutters
          sx={{ width: "300px", fontSize: "18px", height: "50px" }}
          onClick={handleClose}
        >
          <Container>
            <p style={{ marginLeft: "3px" }}>Filter</p>
          </Container>
          <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
            <KeyboardArrowUpIcon />
          </Container>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ width: "300px", display: "flex" }}>
          <Container disableGutters sx={{ paddingLeft: "12px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "light" }}
            >
              Status
            </Typography>
          </Container>
        </MenuItem>

        {["All", "Active", "Upcoming", "Past"].map((option) => (
          <MenuItem
            key={option}
            sx={{ height: "35px" }}
            onClick={() => handleToggle(option)}
          >
            <Checkbox checked={checkedItems.indexOf(option) !== -1} />
            <ListItemText
              primary={option}
              primaryTypographyProps={{ fontWeight: "light", fontSize: "14px" }}
            />
          </MenuItem>
        ))}

        <Divider />

        <MenuItem sx={{ width: "300px", display: "flex" }}>
          <Container disableGutters sx={{ paddingLeft: "12px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: "light" }}
            >
              Level
            </Typography>
          </Container>
        </MenuItem>

        {["Easy", "Medium", "Hard"].map((option) => (
          <MenuItem
            key={option}
            sx={{ height: "35px" }}
            onClick={() => handleToggle(option)}
          >
            <Checkbox checked={checkedItems.indexOf(option) !== -1} />
            <ListItemText
              primary={option}
              primaryTypographyProps={{ fontWeight: "light", fontSize: "14px" }}
            />
          </MenuItem>
        ))}
      </Menu>

      {open && (
        <Backdrop
          sx={{
            zIndex: (theme) => theme.zIndex.modal - 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          open={true}
          onClick={handleClose}
        />
      )}
    </>
  );
}
