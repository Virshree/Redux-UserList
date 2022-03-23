import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './User.css'; 
import {addUsers} from './features/UserSlice';
import { useNavigate } from 'react-router-dom';
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
  return (
    <div className='user'>
        <h1>Add user</h1>
        <div className='user-input'>
            <input type="text"  value={name}   onChange={(e)=>setName(e.target.value)}placeholder='Name'/>
             <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        </div>
        <button onClick={addUser}className='user-button'>Add </button>
        </div>
  )
}

export default User