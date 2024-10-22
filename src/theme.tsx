import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#F7F8F9',
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
          body: '#161A1D',
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