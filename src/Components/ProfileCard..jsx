import { Card, Container, Stack, Typography,Box } from "@mui/material";
import React from "react";

export const Profiles = ({ name, link, image, data }) => {

    return (
        <>
            <Card>
                <Stack>
                    Image
                </Stack>
                <Stack>
                    Content
                </Stack>


            </Card>
        </>
    )



}

export const ProfileGrid=(data)=>{
    let a=[{"name":"Anym Jawaid",link:"/",image:"",data:"data"}]
return(
    <Container>
    <Box>
        <Typography variant='h2' sx={{ color: "red", textAlign: 'center', mb: 4 }}>
            Our Most Valued Profiles
        </Typography>
        
        <Box 
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
            }}
        >
            {a.map((profile, i) => (
                <Box
                    key={i}
                    sx={{
                        flex: '1 1 calc(33.33% - 16px)', // Three profiles per row
                        maxWidth: 'calc(33.33% - 16px)',
                        mb: 3,
                        boxSizing: 'border-box',
                    }}
                >
                    <Profiles
                        name={profile.name}
                        link={profile.link}
                        image={profile.image}
                        data={profile.data}
                    />
                </Box>
            ))}
        </Box>
    </Box>
</Container>
);
}
