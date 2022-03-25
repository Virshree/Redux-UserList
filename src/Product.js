import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from './features/ProductSlice';
import { Button } from '@material-ui/core';
import './Product.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function Product() {
  const [product,setProduct]=useState("");
  const [avail,setAvail]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleProducts=()=>{
    dispatch(addProduct({
      product:product,
      avail:avail,
    }))
    navigate('/product-list')
  }
  const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    
  },
}));
const classes = useStyles();
  return (
      <div className='product-container'>
        <h1>Add Product Details</h1>
        <div className='product-details'>
          <FormControl className={classes.formControl}>
        <InputLabel id="product-name">Product Name</InputLabel>
        <Select id="product-name" value={product}
         onChange={(e)=>setProduct(e.target.value)} 
         label="product">
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={"T-Shirt"}>T-Shirt</MenuItem>
            <MenuItem value={"Jacket"}>Jacket</MenuItem>
            <MenuItem value={"Trouser"}>Trouser</MenuItem>
            <MenuItem value={"Dress"}>Dress</MenuItem>
            <MenuItem value={"Pants"}>Pants</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel  id="available">Available</InputLabel>
        <Select value={avail} onChange={(e)=>setAvail(e.target.value)}
         id="available">
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
         
          
        </Select>
      </FormControl>
      </div>
      <Button variant='contained' color='primary'
       onClick={handleProducts} className='btn-add'>Add</Button>

      </div>
  )
}

export default Product;