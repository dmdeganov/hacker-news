import {createTheme} from '@mui/material/styles';
import {green, purple} from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#87ff87',
    },
    secondary: {
      main: '#191b24',
    },
    action: {
      disabled: '#b8c1c6',
      disabledBackground: '#b8c1c6',
    },
  },
});
