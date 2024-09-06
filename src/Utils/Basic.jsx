import React,{useSatate} from 'react'
import { Button,Box,MenuItem,MenuList,Menu } from "@mui/material"
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';


export function ThemedButton(props){
    return(
        <>
        <Box  sx={{ width: 300,
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'8px',
        margin:"15px",
        color: 'white',
        borderRadius:"50px",
        fontSize: '1.5rem',
        "&:hover":{
            cursor:"pointer",
            background: 'linear-gradient(to right, #feb47b, #ff7e5f)',

        }}}>{props.label}</Box>
        </>
    )
}

export function DropDown(props){
    const [anchorEl, setAnchorEl] = React.useState();
  const open = false;
  const handleClick = (event) => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
    return(
        <>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
            {props.name}
        </Button>
        <Menu>
        <MenuItem>
        <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          </MenuItem>

        </Menu>
        </>
    )
}