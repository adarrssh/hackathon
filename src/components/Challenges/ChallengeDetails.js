import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ChallengeDatePicker from './DatePicker';


const ChallengeDetails = () => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [difficulty, setDifficulty] = useState('');

    const handleChange = (event) => {
      setDifficulty(event.target.value);
    };


    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: '#F8F9FD', paddingBottom: '100px' }}>
            <Container maxWidth={'xl'} sx={{ height: '107px', display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: '24px' }}>Challenge Details</p>
            </Container>
            <Container maxWidth="xl" sx={{ marginTop: '20px' }}>
                <p
                    style={{ fontSize: '16px' }}
                >
                    Textarea Heading
                </p>
                <TextField
                    multiline
                    sx={{ width: '500px', marginTop: '5px', border: '1px solid black', borderRadius: '5px' }}
                    size='small'
                    variant="outlined"
                    fullWidth
                />
            </Container>
            <Container maxWidth="xl" sx={{ marginTop: '40px' }}>
                <p
                    style={{ fontSize: '16px' }}
                >
                    Start Date
                </p>
                {/* <TextField
                    multiline
                    sx={{ width: '500px', marginTop: '5px', border: '1px solid black', borderRadius: '5px' }}
                    size='small'
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your text here..."
                /> */}
                <ChallengeDatePicker/>
            </Container>
            <Container maxWidth="xl" sx={{ marginTop: '40px' }}>
                <p
                    style={{ fontSize: '16px' }}
                >
                    End Date
                </p>
                <TextField
                    multiline
                    sx={{ width: '500px', marginTop: '5px', border: '1px solid black', borderRadius: '5px' }}
                    size='small'
                    variant="outlined"
                    fullWidth
                    placeholder="Enter your text here..."
                />
            </Container>
            <Container maxWidth="xl" sx={{ marginTop: '20px' }}>
                <p
                    style={{ fontSize: '16px' }}
                >
                    Description
                </p>
                <TextField
                    multiline
                    sx={{ width: '1000px', marginTop: '5px', border: '1px solid black', borderRadius: '5px' }}
                    size='small'
                    rows={10}
                    variant="outlined"
                    fullWidth
                />
            </Container>
            <Container maxWidth="xl" sx={{ marginTop: '20px' }}>
                <p
                    style={{ fontSize: '16px' }}
                >
                    Image
                </p>
                <Button
                    component="label"
                    role={undefined}
                    sx={{ backgroundColor: '#F4F4F4', color: '#666666', width: '236px', height: '47px' }}
                    variant="contained"
                    tabIndex={-1}

                >
                    Upload
                    <CloudUploadIcon sx={{ marginLeft: '8px' }} /> {/* Icon after text with some space */}

                    <input
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                        hidden
                    />
                </Button>
            </Container>

            <Container maxWidth="xl" sx={{ marginTop: '40px' }}>
                <p
                    style={{ fontSize: '16px' }}
                >
                    Level Type
                </p>
                <FormControl fullWidth variant="outlined" sx={{ minWidth: 120, marginTop:'10px' }}>
                    <InputLabel id="difficulty-label">Difficulty</InputLabel>
                    <Select
                        labelId="difficulty-label"
                        id="difficulty-select"
                        value={difficulty}
                        onChange={handleChange}
                        label="Difficulty"
                        sx={{width:'200px', backgroundColor:'white'}}
                    >
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                    </Select>
                </FormControl>
            </Container>

            <Container maxWidth={'xl'} sx={{marginTop:'40px'}}> 
                <Button sx={{backgroundColor:'#44924C', color:'white', height:"46px", width:'216px', borderRadius:'10px', padding:'6px 18px 6px 18px'}}>
                    Create Challenge
                </Button>
            </Container>
            <ChallengeDatePicker/>
        </Container>
    )
}

export default ChallengeDetails

