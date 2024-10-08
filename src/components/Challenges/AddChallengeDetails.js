import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ChallengeDatePicker from "./DatePicker";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import './AddChallengeDetails.css'


const ChallengeDetails = ({ hackathonArr, setHackathonArr }) => {

  const navigate = useNavigate()
  const [difficulty, setDifficulty] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageUrl, setImageUrl] = useState('');



  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create an object URL for the file
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const addNewChallange = () => {
    console.log(startDate, endDate)
    if (
      startDate > endDate ||
      difficulty == "" ||
      description == "" ||
      imageUrl == ""
    ) {
      alert("Error: Invalid data");
    } else {

      setHackathonArr((prev) => [
        ...prev,
        {
          id: uuidv4(),
          created_at: new Date(),
          difficulty,
          heading,
          description,
          startDate,
          endDate,
          imgUrl: imageUrl
        }

      ])
      navigate('/')
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
        <p style={{ fontSize: "16px" }}>Challenge Name</p>
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
        <ChallengeDatePicker defaultDate={new Date()} setDate={setStartDate} />
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
        <ChallengeDatePicker defaultDate={new Date()} setDate={setEndDate} />
      </Container>

      <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
        <p style={{ fontSize: "16px" }}>Description</p>
        <textarea
          id="description"
          style={{
            height: "252px",
            marginTop: "5px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#F8F9FD",
            padding: '20px'
          }}
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Container>
      <Container maxWidth="xl" sx={{ marginTop: "20px", display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: "16px" }}>Image</p>
        {(imageUrl != '') && <div style={{ width: "249px", height: "122pz", border: '1px solid black' }}>
          <img src={imageUrl} alt="img" width={"249px"} height={"122px"} />
        </div>}
        <Button
          onChange={handleFileChange}
          component="label"
          role={undefined}
          sx={{
            backgroundColor: "#F4F4F4",
            color: "#666666",
            width: "236px",
            height: "47px",
            marginTop: "10px"
          }}
          variant="contained"
          tabIndex={-1}

        >
          Upload
          <CloudUploadIcon sx={{ marginLeft: "8px" }} />{" "}
          {/* Icon after text with some space */}
          <input
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            hidden
          />
        </Button>
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
          onClick={addNewChallange}
        >
          Create Challenge
        </Button>
      </Container>
    </Container>
  );
};

export default ChallengeDetails;
