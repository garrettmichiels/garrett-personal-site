import React from 'react';
import './App.css';
import './global.css';

import Box from '@mui/joy/Box';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import theme from './theme';
import InfoButton from './InfoButton';


function BottomMenu() {
  const { mode, setMode } = useColorScheme();
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        display: 'flex',
        gap: 1,
        zIndex: 1000,
      }}
    >
    <IconButton
      variant="solid"
      color="primary"
      component="a"
      href="/resume.pdf"  // Update this path to your actual resume PDF
      target="_blank"
      rel="noopener noreferrer"
      size="md"
      sx={{
        bgcolor: '#4CAF50',
        '&:hover': { bgcolor: '#45a049' },
      }}
    ><DescriptionIcon />
    </IconButton>
    <IconButton
        variant="solid"
        color="primary"
        component="a"
        href="https://www.linkedin.com/in/garrett-michiels/"
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        sx={{
          bgcolor: '#0077B5',
          '&:hover': { bgcolor: '#006699' },
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        variant="solid"
        color="primary"
        component="a"
        href="https://github.com/garrettmichiels"
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        sx={{
          bgcolor: '#333',
          '&:hover': { bgcolor: '#555' },
        }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        variant="solid"
        color={mode === 'light' ? 'warning' : 'primary'}
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        size="md"
        sx={{
          bgcolor: mode === 'light' ? '#FFA500' : '#1E90FF',
          '&:hover': { bgcolor: mode === 'light' ? '#FF8C00' : '#4169E1' },
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Box>
  );
}

function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="system" disableTransitionOnChange>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          bgcolor: 'background.body',
          transition: 'none',
          overflow: 'hidden',
        }}
      >
        <Hero />
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            px: { xs: 2, sm: 3, md: 4 },
            pb: 4,
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '800px' }}>
            <About />
            <Experience />
            <Education />
            {/* <Projects /> */}
          </Box>
        </Box>
        <BottomMenu />
      </Box>
      <InfoButton />
    </CssVarsProvider>
  );
}

export default App;
