import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#f0f0f0',
          surface: '#ffffff',
        },
        text: {
          primary: '#000000',
          secondary: '#555555',
        },
        primary: {
          500: '#1976d2',
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#121212',
          surface: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
        },
        primary: {
          500: '#90caf9',
        },
      },
    },
  },
});

export default theme;