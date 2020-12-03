import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiDialogContentText: {
      // Name of the rule
      root: {
        // Some CSS
        color: '#202224',
        fontFamily: "Montserrat",
        fontSize: '1rem',
      },
    },
    MuiButton: {
      text: {
        
      }
    }
  },
  palette: {
    primary: {
      main: '#852508',
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    // home headline
    h1: {
      fontFamily: "Sail",
      fontSize: '8rem',
    },
    // user nav
    subtitle1: {
      fontFamily: "Sail",
      fontSize: '3rem',
    },
    //home subtitle and page headings + login sign up headings
    h3: {
      fontFamily: "Montserrat",
      fontSize: '2rem',
    },
    //page content 
    h4: {
      fontFamily: "Epilogue"
    },
    //button text - dark grey
    subtitle2: {
      color: '#202224',
      fontFamily: "Montserrat",
      fontSize: '1.5rem',
    },
    h5: {
      color: '#202224',
      fontFamily: "Montserrat",
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontFamily: "Montserrat",
    },
  },
});

export default theme;
