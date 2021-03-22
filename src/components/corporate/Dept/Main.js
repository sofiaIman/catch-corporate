import React from 'react';
//import './App.css';
//import SideMenu from "./SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
//import Header from "./Header";
//import PageHeader from './PageHeader';

import Department from "./pages/Department/Department";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
   
    width: '100%',
    marginTop:'-35px'
  }
})

function Mains() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
  
      <div className={classes.appMain}>
        
        
        <Department />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default Mains