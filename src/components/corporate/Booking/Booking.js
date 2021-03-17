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
import Button from '@material-ui/core/Button';


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 600,
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
  
  export default function AddressForm() {
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
    const steps = ['Shipping address', 'Payment details', 'Review your order'];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Visitor Booking
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
        <Grid item xs={12}>
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
                  <Button variant="contained"
                  color="primary" onClick={handleBack} className={classes.button2}>
                      Schedule Booking
                    </Button>
      </Grid>
    </React.Fragment>
  );
}