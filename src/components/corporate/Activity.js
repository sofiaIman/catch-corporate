import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name,price) {
  return {
    name,
    price,
    history: [
      { date: '2020-01-05', employeeId: 'John', time: '3:00 pm', price :200 },
      { date: '2020-01-02', employeeId: 'Jane', time: '1:00 pm', price :400 },
      { date: <div>
<<<<<<< Updated upstream
        <img src={require("assets/img/mapplaceholder.PNG").default}
=======
        <img src={require("assets/img/mapplaceholder.png").default}
>>>>>>> Stashed changes
        class="centerImage"
                width="380" height="120"
                img-align = "center"
                alt="..."/>
       </div>
    }
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><h6>Date</h6></TableCell>
                    <TableCell><h6>Employee</h6></TableCell>
                    <TableCell align="right"><h6>Time</h6></TableCell>
                    <TableCell align="right"><h6>Total price ($)</h6></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.employeeId}</TableCell>
                      <TableCell align="right">{historyRow.time}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    
    history: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.number.isRequired,
        employeeId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    
  }).isRequired,
};

const rows = [
  createData('IT', 159, 6.0, 24, 4.0, 3.99),
  createData('Customer Care', 237, 9.0, 37, 4.3, 4.99),
  createData('Finance', 262, 16.0, 24, 6.0, 3.79),
  createData('Department A', 305, 3.7, 67, 4.3, 2.5),
  createData('Department B', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><strong><h6>Departments activity </h6></strong></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
