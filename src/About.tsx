import React from 'react';
import { FaLink } from "react-icons/fa";
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';

function About() {
    return (
        <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 5}}>
            <Typography level="h2" sx={{display: 'flex', alignItems: 'center' }}>
                About
            </Typography>
            <Typography sx={{ mb: 2 }}>
                    I'm a passionate software engineer with a keen interest in building scalable and efficient solutions. 
                    With a strong foundation in computer science and hands-on experience in various technologies, 
                    I strive to create impactful software that solves real-world problems.
                </Typography>
        </Box>
    );
}

export default About;
