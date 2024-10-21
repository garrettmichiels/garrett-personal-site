import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // You can add more color scales here (secondary, neutral, danger, etc.)
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Dark mode colors can be different if you want
      },
    },
  },
  fontFamily: {
    body: '"Roboto", sans-serif',
    display: '"Roboto", sans-serif',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 600,
          borderRadius: '8px',
          // Add more custom styles here
        }),
      },
    },
    // You can customize other components here
  },
});

export default theme;
