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
// import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import CustomCursor from './CustomCursor';

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
        title="Resume"
        component="a"
        href="/Garrett-Michiels-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        sx={{
          bgcolor: '#4CAF50',
          '&:hover': { bgcolor: '#45a049' },
          cursor: 'none', // Ensure cursor is hidden on specific elements too
        }}
      ><DescriptionIcon />
      </IconButton>
      <IconButton
        variant="solid"
        color="primary"
        title="LinkedIn"
        component="a"
        href="https://www.linkedin.com/in/garrett-michiels/"
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        sx={{
          bgcolor: '#0077B5',
          '&:hover': { bgcolor: '#006699' },
          cursor: 'none',
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        variant="solid"
        color="primary"
        component="a"
        title="GitHub"
        href="https://github.com/garrettmichiels"
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        sx={{
          bgcolor: '#333',
          '&:hover': { bgcolor: '#555' },
          cursor: 'none',
        }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        variant="solid"
        color={mode === 'light' ? 'warning' : 'primary'}
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        size="md"
        title="Theme"
        sx={{
          bgcolor: mode === 'light' ? '#FFA500' : '#1E90FF',
          '&:hover': { bgcolor: mode === 'light' ? '#FF8C00' : '#4169E1' },
          cursor: 'none',
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
      <CustomCursor />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          bgcolor: 'background.body',
          transition: 'none',
          overflow: 'hidden',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
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
            <Skills />
            <Experience />
            {/* <Projects /> */}
            <Education />
            {/* <Contact /> */}
          </Box>
        </Box>
        <BottomMenu />
      </Box>
      <InfoButton />
    </CssVarsProvider>
  );
}

export default App;
