import React from 'react'
import './Nav.css';
import NavItem from './NavItem';
function Nav() {
  return (
        <div className='nav-container'>
           <div className='nav'>
            <NavItem title='ADD USER' link='/'/>
            <NavItem title='USER LIST' link='/user-list'/>
            <NavItem title='ADD PRODUCT' link='/product'/>
            <NavItem title='PRODUCT LIST' link='/product-list'/>
           </div>
        </div>
  )
}

export default Nav