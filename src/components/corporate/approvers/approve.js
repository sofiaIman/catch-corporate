import React from 'react';
//import './App.css';
//import SideMenu from "./SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
//import Header from "./Header";
//import PageHeader from './PageHeader';

import Employees from "./pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#734A12",
      light: '#D2CCC1'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#E1CFB5"
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
   
    width: '100%'
  }
})

function approve() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
  
      <div className={classes.appMain}>
        
        
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default approve