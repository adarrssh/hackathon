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
    } else {
      addFilterCondition();
    }
  }, [filteredList]);

  const checkStatus = (item) => {
    const currentDate = new Date();
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    const isBeforeStart = currentDate < startDate;
    const isBetweenStartAndEnd =
      currentDate >= startDate && currentDate < endDate;
    const isAfterEnd = currentDate >= endDate;

    if (isBeforeStart) return "Upcoming";
    else if (isBetweenStartAndEnd) return "Active";
    else return "Past";
  };

  const addFilterCondition = () => {
    let arr = [];

    if (filteredList.indexOf("Active") != -1) {
      let filterArr = originalHackathonArr.filter(
        (item) => checkStatus(item) == "Active"
      );
      arr.push(...filterArr);
      console.log('active',arr)
    }

    if (filteredList.indexOf("Upcoming") != -1) {
      let filterArr = originalHackathonArr.filter(
        (item) => checkStatus(item) == "Upcoming"
      );
      arr.push(...filterArr);
    }

    if (filteredList.indexOf("Past") != -1) {
      let filterArr = originalHackathonArr.filter(
        (item) => checkStatus(item) == "Past"
      );
      arr.push(...filterArr);
    }

    if (
      filteredList.indexOf("Easy") === -1 &&
      filteredList.indexOf("Medium") === -1 &&
      filteredList.indexOf("Hard") === -1
    ) {
      setHackathonArr(arr);
    } else {
      let levelFilter = [];

      if (filteredList.indexOf("Easy") != -1) {
        let filterArr = arr.filter((item) => item.difficulty == "Easy");
        levelFilter.push(...filterArr);
      }

      if (filteredList.indexOf("Medium") !== -1) {
        let filterArr = arr.filter((item) => item.difficulty == "Medium");
        levelFilter.push(...filterArr);
      }

      if (filteredList.indexOf("Hard") != -1) {
        let filterArr = arr.filter((item) => item.difficulty == "Hard");
        levelFilter.push(...filterArr);
      }

      setHackathonArr(levelFilter);
    }
  };


  const handleToggle = (value) => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
      if(value == 'All'){
        let arr = []
        if(filterCondition.indexOf('Active') === -1){
          arr.push('Active')
        }
        if(filterCondition.indexOf('Upcoming') === -1){
          arr.push('Upcoming')
        }
        if(filterCondition.indexOf('Past') === -1){
          arr.push('Past')
        }

        setFilteredList((prev) => [...prev, ...arr]);
      }else{
        setFilteredList((prev) => [...prev, value]);
      }
    } else {
      let arr = filteredList.filter((item) => item != value);
      setFilteredList([...arr]);
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
