import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginRight:theme.spacing(9),
      margin: theme.spacing(5),
      width: theme.spacing(38),
      height: theme.spacing(29),
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    
  },
  expiryDays:
  {
width:theme.spacing(32),
height:theme.spacing(3),
  },
btn:{
      marginLeft:"10px",
      width:theme.spacing(28),
      height:theme.spacing(4),
  },
  texts:{
      marginLeft:"28px",
      marginTop :"5px"

  },
  vehicleType:{
      
    width:theme.spacing(38),
    height:theme.spacing(29),
  },
  checkb:{
      margin: theme.spacing(3),
      marginLeft:"20px"
  }
  
}));

export default function SimplePaper() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper elevation={3} ><h6 className={classes.texts}> Add Expiry Days </h6> <TextField id="filled-search" label="" type="number" variant="outlined" />
 <Typography> This is the number of days as approved trip lasts 0 days means no expiration</Typography>
    <Button className={classes.btn} variant="contained" color="primary">
  ADD
</Button> </Paper>
    <Paper elevation={3} > <h6 className={classes.texts}>Limit Distance (KM) </h6><TextField id="outlined-textarea" label="" type="number" variant="outlined"/>
    <Typography>Drivers will get a notification when the above distance is passed</Typography>
    <Button className={classes.btn} variant="contained" color="primary">
    ADD
  </Button></Paper>
      <Paper elevation={3} > <h6 className={classes.texts}>Limit Time (MIN) </h6><TextField id="outlined-textarea" label="" type="number" variant="outlined"/>
     <Typography>Driver will get notification when the above time is passed</Typography>
      <Button className={classes.btn} variant="contained" color="primary">
      ADD
    </Button> </Paper>
      <Paper elevation={3} className={classes.vehicleType} > <h6 className={classes.texts}>Lock Vehicle Type </h6><FormControlLabel
      control={
        <Checkbox
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
      }
      label="XL"
      
    />
    <FormControlLabel className={classes.checkb}
      control={
        <Checkbox
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedA"
          color="primary"
        />
      }
      label="Easy"
      
    />
    <Typography> Select the vehicle type the department is going to use</Typography>
    
      <Button className={classes.btn} variant="contained" color="primary">
      ADD
    </Button></Paper>
    </div>
  );
}