import { createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2AF42',
    },
    text: {
      primary: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: orange[200],
    },
  },
});

export default theme;
