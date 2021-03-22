import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Setting() {
  const [open, setOpen] = React.useState(false);
  const [openPass, setOpenPass] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item xs={12}>
          <Paper className={classes.paper}><div>
          <Button variant="outlined" color="success" onClick={()=>setOpenPass(!openPass)}>
            Change Password
          </Button>
          <Dialog open={openPass} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
            <DialogContent>
              
            <TextField
            required
            id="currentPassword"
            name="currentPassword"
            placeholder="Current Password"
            fullWidth
            
          />
          <TextField
            required
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            fullWidth
            
          />
          <TextField
          required
          id="newPassword"
          name="newPassword"
          placeholder="New Password"
          fullWidth
          
        />
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>setOpenPass(!openPass)} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><div>
          <Button variant="outlined" color="success" onClick={handleClickOpen}>
            Forgot Password
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
            <DialogContentText>  Please enter your email address. We will
            send you an email to reset your password</DialogContentText>
            <DialogContent>
              
            <TextField
            required
            id="email"
            name="email"
            placeholder="yours@example.com"
            fullWidth
            
          />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Send Email
              </Button>
              
            </DialogActions>
          </Dialog>
        </div>
        </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
