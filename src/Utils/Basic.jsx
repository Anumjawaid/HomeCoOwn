import React, { useSatate } from 'react'
import { Button, Box, MenuItem, MenuList, Menu, Select, InputLabel } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export function ThemedButton(props) {
  return (
    <>
      <Box sx={{
        width: 300,
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        margin: "15px",
        color: 'white',
        borderRadius: "50px",
        fontSize: '1.5rem',
        "&:hover": {
          cursor: "pointer",
          background: 'linear-gradient(to right, #feb47b, #ff7e5f)',

        }
      }}>{props.label}</Box>
    </>
  )
}

export function DropDown(props) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{border:"2px solid #feb47b",color:"#feb47b"}}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <span style={{color:"black"}}>{props.placeholder}</span>
      </Button>
      <Menu
        
        anchorEl={anchorEl}
        open={open}
        label="Property"
        onClose={handleClose}
        sx={{color:"red"}}
        variant='selectedMenu'
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <MenuItem sx={{color:"red",}} onClick={handleClose}>Profile</MenuItem>
       
      </Menu>
    </div>

  )
}