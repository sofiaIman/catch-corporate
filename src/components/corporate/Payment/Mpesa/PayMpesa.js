import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Payment() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" placeholder="phone number" fullWidth autoComplete="cc-name" />
        </Grid>
       
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" placeholder="name" fullWidth autoComplete="cc-exp" />
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember phone number details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}