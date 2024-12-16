import React from 'react';
import { Box, Typography, Avatar, Button, Stack ,Container} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styles for the profile card
const ProfileCard = styled(Box)({
    // backgroundColor: '#00bfa5', // Background color for the lower part
    padding: '20px',
    borderRadius: '16px',
    border:"1px solid #ff7e5f",
    color: '#ff7e5f',
    textAlign: 'center',
    maxWidth: '300px',
    position: 'relative',
    overflow: 'hidden', // Ensures the SVG doesn't overflow the rounded corners
});

const WaveBackground = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%', // Only cover the top half
    background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150' preserveAspectRatio='none'><path d='M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z' style='stroke: none; fill:%2300bfa5;'></path></svg>")`,
    backgroundSize: 'cover'
});

const Stats = styled(Typography)({
    fontSize: '16px',
    fontWeight: 'bold'
});

const Label = styled(Typography)({
    fontSize: '12px',
    color: '#ccc'
});
const Wave=styled("div")({
    backgroundColor: "#4CAF50",
})

export default function Profiles() {
    return (
        <ProfileCard>
            <Wave><Avatar sx={{ width: 90, height: 90, mx: 'auto', mt: 3 }} src="profile_image_url" /></Wave>
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
