import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import Avatar from '@mui/joy/Avatar';

function Hero() {
  return (
    <Box sx={{ 
      py: 4,
      bgcolor: 'background.body',
    margin: '0 auto',
    maxWidth: '800px'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }, alignItems: 'center', gap: 4 }}>
          <Avatar
            src="/images/profile-picture.jpeg"
            alt="Garrett Michiels"
            sx={{ 
              width: { xs: 150, md: 200 },
              height: { xs: 150, md: 200 },
              boxShadow: 'lg'
            }}
          />
          <Box>
            <Typography level="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 0 }}>
              Garrett Michiels
            </Typography>
            <Typography level="h4" sx={{ fontWeight: 'normal' }}>
              Software Engineer with a B.S. in Computer Science from Northeastern University looking to build impactful software.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
