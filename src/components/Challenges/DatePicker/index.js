import * as React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import "./index.css";

// Extend dayjs with the customParseFormat plugin
dayjs.extend(customParseFormat);

export default function ChallengeDatePicker({defaultDate,setDate}) {
  
  const curr_date = new Date('September 4, 2024 10:57:00');
  const [value, setValue] = React.useState(dayjs(curr_date));

  const handleDateChange = (newValue) => {
    console.log(formatDate(newValue));
    setDate(formatDate(newValue));
    setValue(newValue);
  };

  // Function to format the date
  const formatDate = (date) => {
    if (!date) return '';
    return dayjs(date).format('MMMM D, YYYY HH:mm:ss');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="bb"
        value={value}
        onChange={handleDateChange}
        sx={{ position: "absolute", bottom: "1px", left: "25px" }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
