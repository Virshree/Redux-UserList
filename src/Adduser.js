import React from 'react'
import { useSelector } from 'react-redux';
import './Adduser.css';
import { selectUser } from './features/UserSlice';
function Adduser() {
  const user=useSelector(selectUser);
  console.log(user);
  return (
    <div></div>
  )
}

export default Adduser