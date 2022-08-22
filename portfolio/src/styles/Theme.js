import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#323232;',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#535252;',
    },
  },
});

export default theme;
