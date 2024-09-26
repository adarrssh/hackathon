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

export default function ChallengeDatePicker({ defaultDate, setDate }) {
  
  // Function to format the date
  const formatDate = (date) => {
    if (!date) return '';
    return dayjs(date).format('MMMM D, YYYY HH:mm:ss');
  };

  const [value, setValue] = React.useState(dayjs(defaultDate || new Date()));

  React.useEffect(() => {
    console.log(defaultDate)
    if (defaultDate) {
      setDate(formatDate(defaultDate));
      setValue(dayjs(defaultDate));
    }
  }, [defaultDate]);

  const handleDateChange = (newValue) => {
    setDate(formatDate(newValue));
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="date-picker"
        value={value}
        onChange={handleDateChange}
        sx={{ position: "absolute", bottom: "1px",  }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
