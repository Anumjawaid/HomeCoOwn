import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Background from '../UI/hOwnback.webp'

const BackgroundSection = () => {
    return (
        <>
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '500px', // Adjust height as needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ opacity: "0.5px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: "white" }}>
                    <Typography variant='h2'>
                        Let's Find The Best Place For You
                    </Typography>
                    <Typography variant='h5'>Own your dream home with ease. Explore co-ownership opportunities and take the first step toward your new home today!</Typography>
                    <Typography variant='h5'>Dreaming of homeownership? Join our co-ownership community today and make it a reality. Start your journey now!</Typography>

                </Box>


            </Container>
            <Filters />
        </>
    );
};

export default BackgroundSection;

const Filters = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: background color with transparency for content
                padding: 4,
                borderRadius: 2,
                position:"absolute",
                top:"400px",
                left:"450px",
                alignItems:'center',

            }}
        >
            <h1>Your Content Here</h1>
            <p>This is a section with a background image using MUI's Container component.</p>
        </Box>

    )
}