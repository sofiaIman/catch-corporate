import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import CreditCardIcon from '@material-ui/icons/CreditCard';
//import CheckOut from "components/corporate/Payment/CheckOut";
import { Link } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      
    <div>
        <img src={require("assets/img/pay.png").default}
        style={{ marginLeft: "260px"}}
                width="600" height="260" 
                
                />
       
    <div style={{ display: "flex" }}>
      <Button
      style={{ marginLeft: "380px" , fontSize: 18 , marginTop: "10px" }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        
        onClick={handleClick}
      >
        Choose Payment Method
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem button component={Link} to="/admin/CheckOut">
          <ListItemIcon >
            <CreditCardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Card" />
        </StyledMenuItem>
        <StyledMenuItem button component={Link} to="/admin/CheckMpesa">
          <ListItemIcon>
            <SmartphoneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="M-Pesa" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
    </div>
  );
}
