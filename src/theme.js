import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#852508',
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Sail",
      fontSize: '8rem',
    },
    subtitle1: {
      fontFamily: "Montserrat",
      fontSize: '2rem',
    },
  }
});

export default theme;
