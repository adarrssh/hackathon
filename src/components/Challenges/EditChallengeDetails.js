import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ChallengeDatePicker from "./DatePicker";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../../assets/cardimage/Group1.png";
import arrow from "../../assets/image/arrow.png";
import change_image from "../../assets/image/change_image.png";
import "./EditChallengeDetails.css";

const ChallengeDetails = ({ hackathonArr, setHackathonArr }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const item = hackathonArr.find((element) => element.id == id);

  const [difficulty, setDifficulty] = useState("");
  const [heading, setHeading] = useState(item.heading);
  const [description, setDescription] = useState(item.description);
  const [startDate, setStartDate] = useState(item.startDate);
  const [endDate, setEndDate] = useState(item.endDate);
  const [imageUrl, setImageUrl] = useState(item.imgUrl);

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create an object URL for the file
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const editChallenge = () => {
    const filterdArr = hackathonArr.filter((item) => item.id != id);

    const newObj = {
      id: uuidv4(),
      created_at: new Date(),
      difficulty: difficulty != "" ? difficulty : item.difficulty,
      heading,
      description,
      startDate,
      endDate,
      imgUrl: imageUrl,
    };

    console.log(startDate, endDate);

    if (
      new Date(startDate) > new Date(endDate) ||
      newObj.difficulty == "" ||
      newObj.description == "" ||
      newObj.imgUrl == ""
    ) {
      alert("Error: Invalid data");
    } else {
      setHackathonArr((prev) => [...filterdArr, newObj]);
      navigate("/");
    }

  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ backgroundColor: "#F8F9FD", paddingBottom: "100px" }}
    >
      <Container
        maxWidth={"xl"}
        sx={{ height: "107px", display: "flex", alignItems: "center" }}
      >
        <p style={{ fontSize: "24px" }}>Challenge Details</p>
      </Container>
      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <p style={{ fontSize: "16px" }}>Textarea Heading</p>
        <TextField
          multiline
          sx={{
            width: "500px",
            marginTop: "5px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          size="small"
          variant="outlined"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
      </Container>
      <Container maxWidth="xl" sx={{ marginTop: "40px", position: "relative" }}>
        <p style={{ fontSize: "16px" }}>Start Date</p>

        <div
          style={{
            width: "500px",
            height: "39px",
            borderRadius: "5px",
            border: "1.5px solid black",
          }}
        ></div>
        <ChallengeDatePicker
          defaultDate={new Date(startDate)}
          setDate={setStartDate}
        />
      </Container>

      <Container maxWidth="xl" sx={{ marginTop: "40px", position: "relative" }}>
        <p style={{ fontSize: "16px" }}>End Date</p>

        <div
          style={{
            width: "500px",
            height: "39px",
            borderRadius: "5px",
            border: "1.5px solid black",
          }}
        ></div>
        <ChallengeDatePicker
          defaultDate={new Date(endDate)}
          setDate={setEndDate}
        />
      </Container>

      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <p style={{ fontSize: "16px" }}>Description</p>
        <textarea
          value={description}
          id="description"
          style={{
            width: "1000px",
            height: "252px",
            marginTop: "5px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#F8F9FD",
            padding: "20px",
          }}
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Container>
      <Container
        maxWidth="xl"
        sx={{ marginTop: "20px", background: "#F8F9FD" }}
      >
        <p style={{ fontSize: "16px" }}>Image</p>
        <div
          style={{
            width: "297px",
            height: "218px",
            // backgroundColor:"white",
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={imageUrl} alt="img" width={"249px"} height={"122px"} />
          <div
            className="change-image-div"
            onClick={handleButtonClick}
            style={{
              paddingLeft: "50px",
              paddingTop: "10px",
              width: "100%",
              color: "#44924C",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            variant="contained"
            tabIndex={-1}
          >
            <img src={change_image} alt="" height={"20px"} />
            <p style={{ paddingLeft: "10px" }}>Change Image</p>
            <img
              style={{ paddingLeft: "10px" }}
              src={arrow}
              alt=""
              height={"10px"}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              hidden
            />
          </div>
        </div>
      </Container>

      <Container maxWidth="xl" sx={{ marginTop: "40px" }}>
        <p style={{ fontSize: "16px" }}>Level Type</p>
        <FormControl
          variant="outlined"
          sx={{ minWidth: 120, marginTop: "10px" }}
        >
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            id="difficulty-select"
            value={difficulty}
            onChange={handleChange}
            label="Difficulty"
            sx={{ width: "200px", backgroundColor: "white" }}
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Container maxWidth={"xl"} sx={{ marginTop: "40px" }}>
        <Button
          sx={{
            backgroundColor: "#44924C",
            color: "white",
            height: "46px",
            width: "216px",
            borderRadius: "10px",
            padding: "6px 18px 6px 18px",
          }}
          onClick={editChallenge}
        >
          Edit Challenge
        </Button>
      </Container>
    </Container>
  );
};

export default ChallengeDetails;
