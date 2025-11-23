import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  fontFamily: {
    body: 'Inter, var(--joy-fontFamily-fallback)',
    display: 'Inter, var(--joy-fontFamily-fallback)',
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#ffffff', // Cleaner white background
          surface: '#f8f9fa',
        },
        text: {
          primary: '#1a1a1a', // Softer black
          secondary: '#666666',
        },
        primary: {
          500: '#2F71D6', // Consistent with CSS var
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: '#0d1117', // Github-like dark mode
          surface: '#161b22',
        },
        text: {
          primary: '#c9d1d9',
          secondary: '#8b949e',
        },
        primary: {
          500: '#58a6ff',
        },
      },
    },
  },
});

export default theme;