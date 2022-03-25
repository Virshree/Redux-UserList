import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './User.css'; 
import {addUsers} from './features/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function User() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const addUser=()=>{
      dispatch(addUsers({
        name:name,
        email:email,
      })) 
      navigate('/user-list')
    }
    const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));
const classes = useStyles();
  return (
    <div className='user'>
        <h1>Add user</h1>
        <div className={classes.root}>
             <TextField id="outlined-basic" value={name}  onChange={(e)=>setName(e.target.value)}   label="Name" variant="outlined" />
              <TextField id="outlined-basic" value={email} onChange={(e)=>setEmail(e.target.value)}  label="Email" variant="outlined" />
        </div>
        <Button  variant='contained'  color='primary'onClick={addUser}className='user-button'>Add </Button>
        </div>
  )
}

export default User