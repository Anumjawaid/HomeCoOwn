import React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import Background from '../UI/hOwnback.webp'
import { GradientButton,DropDown } from '../Utils/Design/Basic';
import { countries,makeOptions } from '../Logics&API\'s/Country';
import { PROPERTY_TYPE,PETS_PREFERENCE,RELATIONSHIP_STATUS,CREDIT_STATUS,FINANCIAL_PREFERENCE,COOWNING_PREFERENCE } from '../Constants/filtercontent';

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
                <Box sx={{   background: 'rgba(128, 128, 128, 0.5)',padding:"20px",borderRadius:"10px",opacity: "0.5px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: "white" }}>
                    <Typography variant='h2'>
                        Let's Find The Best Place For You
                    </Typography>
                    <Typography variant='h5'>Own your dream home with ease. Explore co-ownership opportunities and take the first step toward your new home today!</Typography>
                    <Typography variant='h5'>Dreaming of homeownership? Join our co-ownership community today and make it a reality. Start your journey now!</Typography>
                    <GradientButton label={"Explore More"}/>
                </Box>
            <Filters />



            </Container>
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
                display: 'flex', // Enable flexbox
                flexDirection: 'column', // Set direction to row
                alignItems: 'center', // Align items vertically in the center
                gap: 2, // Add spacing between the dropdowns

            }}
        >
            <Stack sx={{ display: 'flex', // Enable flexbox
                flexDirection: 'row',gap:2 }}>
           <DropDown placeholder="Type of Property " list={makeOptions(PROPERTY_TYPE)} value="Property "/>
           <DropDown placeholder="Select Country " list={countries}/>
           <DropDown placeholder="Financial Preference" list={makeOptions(FINANCIAL_PREFERENCE)} value="Property "/>
           <DropDown placeholder="Credit Preference" list={makeOptions(CREDIT_STATUS)} value="Property "/>
           <DropDown placeholder="Co-owning Preference" list={makeOptions(COOWNING_PREFERENCE)} value="Property "/>
           <DropDown placeholder="Relationship Status" list={makeOptions(RELATIONSHIP_STATUS)} value="Property "/>
           </Stack>

           <Stack sx={{ display: 'flex', // Enable flexbox
                flexDirection: 'row', }}>
            <GradientButton label={"Search"} width={100} padding={'4px'}/>
            <GradientButton label={"Reset"} width={100} padding={'4px'}/>

           </Stack>


          
        </Box>

    )
}