import { Button,Box } from "@mui/material"

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