import React, { useState } from 'react';
import { Button, Menu, MenuItem, Checkbox, ListItemText, Backdrop, Box, Icon, Container, Typography, Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function DropdownWithBackdrop() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [checkedItems, setCheckedItems] = useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (value) => {
        const currentIndex = checkedItems.indexOf(value);
        const newChecked = [...checkedItems];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedItems(newChecked);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClick} sx={{ display: 'flex', backgroundColor: 'white', width: '130px', height: '50px', color: 'black', textTransform: 'none', borderRadius: '12px' }}>
                <Container>
                    <p style={{ fontSize: '18px' }}>Filter</p>
                </Container>
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'dropdown-button', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}

            >


                <MenuItem
                    disableGutters
                    sx={{ width: '300px', fontSize: '18px', height: '50px' }}
                    onClick={handleClose}
                >
                    <Container>
                        <p style={{ marginLeft: '3px' }}>Filter</p>
                    </Container>
                    <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <KeyboardArrowUpIcon />
                    </Container>
                </MenuItem>

                <Divider />


                <MenuItem sx={{ width: '300px', display: 'flex' }}>
                    <Container disableGutters sx={{ paddingLeft: '12px' }}>
                        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'light' }}>Status</Typography>
                    </Container>
                </MenuItem>


                {['All', 'active', 'Upcoming', 'Past'].map((option) => (
                    <MenuItem key={option} sx={{ height: '35px' }} onClick={() => handleToggle(option)}>
                        <Checkbox checked={checkedItems.indexOf(option) !== -1} />
                        <ListItemText primary={option} primaryTypographyProps={{ fontWeight: 'light', fontSize: '14px' }} />
                    </MenuItem>
                ))}


                <Divider />

                {/* Heading 3 */}
                <MenuItem sx={{ width: '300px', display: 'flex' }}>
                    <Container disableGutters sx={{ paddingLeft: '12px' }}>
                        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'light' }}>Level</Typography>
                    </Container>
                </MenuItem>

                {/* Checkboxes under Heading 3 */}
                {['Easy', 'Medium', 'Hard'].map((option) => (
                    <MenuItem key={option} sx={{ height: '35px' }} onClick={() => handleToggle(option)} >
                        <Checkbox checked={checkedItems.indexOf(option) !== -1} />
                        <ListItemText primary={option} primaryTypographyProps={{ fontWeight: 'light', fontSize: '14px' }} />
                    </MenuItem>
                ))}
            </Menu>

            {open && (
                <>
                    {/* Backdrop to darken the background */}
                    <Backdrop
                        sx={{
                            zIndex: (theme) => theme.zIndex.modal - 1, // Make sure it stays behind the menu
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                        open={true}
                        onClick={handleClose}
                    />
                    {/* Optional: You can use a Box for a similar effect */}
                    {/* <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: (theme) => theme.zIndex.modal - 1,
            }}
            onClick={handleClose}
          /> */}
                </>
            )}
        </>
    );
}


