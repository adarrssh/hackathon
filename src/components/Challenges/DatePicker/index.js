import * as React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

// Extend dayjs with the customParseFormat plugin
dayjs.extend(customParseFormat);

export default function ChallengeDatePicker() {
  const [value, setValue] = React.useState(null);

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  // Function to format the date
  const formatDate = (date) => {
    if (!date) return '';
    return dayjs(date).format('Do MMM\'YY hh:mm A');
  };

  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={handleDateChange}
          sx={{}}
          renderInput={(params) => <TextField sx={{width:'1200px'}} {...params} />}
        />
    </LocalizationProvider>
  );
}
