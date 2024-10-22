import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#f0f0f0',  // Light mode background
          level1: '#333333', // Color of dots in light mode
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#121212',  // Dark mode background
          level1: '#e0e0e0', // Color of dots in dark mode
        },
      },
    },
  },
  // ... other theme configurations
});

export default theme;
