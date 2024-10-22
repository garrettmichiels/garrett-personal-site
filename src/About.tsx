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
            I am a passionate software engineer with a strong desire to build impactful, user-centered solutions that improve everyday life. With an entrepreneurial mindset and a love for innovation, I thrive on exploring new ideas and turning them into practical, scalable technology. I’m constantly seeking opportunities to grow, both technically and creatively, and I’m excited to contribute to teams that value problem-solving, collaboration, and the potential to make a real-world impact.
            </Typography>
        </Box>
    );
}

export default About;
