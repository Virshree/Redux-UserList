import React from 'react'
import { useSelector } from 'react-redux';
import './Adduser.css';
import { selectUser } from './features/UserSlice';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
function Adduser() {
  const user=useSelector(selectUser);
  console.log(user);
   const useStyles = makeStyles({
  table: {
     minWidth:900,
    
  },
});
const classes = useStyles();
  return (
    <div>
        <h1 style={{textAlign:"center"}}>User List</h1>
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody classes={classes.table}>
          {user.map((row,i) => (
            <TableRow key={i} >
              <TableCell  scope="row">
                {row.name}
              </TableCell>
        
              <TableCell >{row.email}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Adduser