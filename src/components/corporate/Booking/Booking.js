import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import Box from '@material-ui/core/Box';

import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 546,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    buttons1: {
      display: 'flex',
      justifyContent: 'flex-end',
    
    },
    button2: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      marginLeft:300
    },
  }));
  
  export default function Booking() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    const steps = ['Shipping address', 'Payment details', 'Review your order'];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <h6> Book for a Visitor </h6>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
           placeholder="FirstName"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            placeholder="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="mobileno"
            name="MobileNo"
            placeholder="Mobile Number"
            fullWidth
            autoComplete="Mobileno"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PickUpLocation"
            name="PickUpLocation"
           placeholder="PickUp Location"
            fullWidth
            autoComplete="address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="DropOffLocation"
            name="DropOffLocation"
            placeholder="DropOff Location"
            fullWidth
            autoComplete=" address-line2"
          />
        </Grid>
        
        
        <Grid item xs={12}>
        <FormControl className={classes.formControl} item xs={12}>
        <placeholder id="demo-simple-select-helper-label">Vehicle Type</placeholder>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>XL</MenuItem>
          <MenuItem value={20}>Easy</MenuItem>
         
        </Select>
        <FormHelperText>Select the Vehicle Type</FormHelperText>
      </FormControl>
        </Grid>
        
        
        <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button2}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Book Now'}
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleClickOpen}  className={classes.button2}>
        Schedule Booking
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Schedule Booking </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set Time
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          placeholder="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          placeholder="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            SET
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </React.Fragment>
  );
}