import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import Avatar from '@mui/joy/Avatar';

function Hero() {
  return (
    <Box sx={{
      py: 8,
      bgcolor: 'background.body',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: (theme) => `linear-gradient(180deg, ${theme.vars.palette.primary[500]}15 0%, ${theme.vars.palette.background.body} 100%)`,
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 6,
          animation: 'fadeIn 1s ease-out'
        }}>
          <Avatar
            src="/images/profile-picture.jpeg"
            alt="Garrett Michiels"
            sx={{
              width: { xs: 180, md: 240 },
              height: { xs: 180, md: 240 },
              boxShadow: 'lg',
              border: '4px solid',
              borderColor: 'background.surface',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              level="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem' },
                mb: 2,
                background: (theme) => `linear-gradient(45deg, ${theme.vars.palette.text.primary}, ${theme.vars.palette.primary[500]})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Garrett Michiels
            </Typography>
            <Typography
              level="h3"
              sx={{
                fontWeight: 'normal',
                color: 'text.secondary',
                maxWidth: '600px',
                lineHeight: 1.6
              }}
            >
              Software Engineer with a B.S. in Computer Science from Northeastern University looking to build impactful software.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
