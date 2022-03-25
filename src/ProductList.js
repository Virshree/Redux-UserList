import React from 'react'
import { useSelector } from 'react-redux';
import { selectProduct } from './features/ProductSlice';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './ProductList.css';
function ProductList() {
  const product=useSelector(selectProduct);
  console.log(product);
  const useStyles = makeStyles({
  table: {
     minWidth:660,
    
  },
});
const classes = useStyles();
  return (
    <div className='product-list'>
      <h1 style={{textAlign:"center"}}>Product-List</h1>
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell >Is Available?</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody classes={classes.table}>
          {product.map((row,i) => (
            <TableRow key={i} >
              <TableCell  scope="row">
                {row.product}
              </TableCell>
        
              <TableCell >{row.avail}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductList