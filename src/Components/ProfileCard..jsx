import { Card, Container, Stack, Typography, Box,Avatar,Button } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';

// Custom styles for the profile card
const ProfileCard = styled(Box)({
    backgroundColor: '#00bfa5',
    padding: '20px',
    borderRadius: '16px',
    color: 'white',
    textAlign: 'center',
    maxWidth: '300px'
});

const Stats = styled(Typography)({
    fontSize: '16px',
    fontWeight: 'bold'
});

const Label = styled(Typography)({
    fontSize: '12px',
    color: '#ccc'
});

export const  Profiles=  ({ name, link, image, data })=> {
    return (
        <ProfileCard>
            <Avatar sx={{ width: 90, height: 90, mx: 'auto' }} src="profile_image_url" />
            <Typography variant="h6" sx={{ mt: 2 }}>Jennifer Sanchez</Typography>
            <Typography sx={{ mb: 1 }}>Mexico</Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
                <Box>
                    <Stats>532</Stats>
                    <Label>Posts</Label>
                </Box>
                <Box>
                    <Stats>13.2K</Stats>
                    <Label>Followers</Label>
                </Box>
                <Box>
                    <Stats>389</Stats>
                    <Label>Following</Label>
                </Box>
            </Stack>
            <Button variant="contained" sx={{ bgcolor: 'white', color: '#00bfa5', fontWeight: 'bold', mb: 1 }}>
                Follow
            </Button>
            <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>
                Message
            </Button>
        </ProfileCard>
    );
}

export const ProfileGrid = (data) => {
    let a = [{ "name": "Anym Jawaid", link: "/", image: "", data: "data" }]
    return (
        <Container>
            <Box>
                <Typography variant='h2' sx={{
                    backgroundcolor: "primary",
                    backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: 'center', mb: 4
                }}>
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
