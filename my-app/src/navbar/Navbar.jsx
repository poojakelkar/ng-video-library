import React from 'react'
import './navbar.scss'
import { AccountCircle,  ArrowDropDown, Notifications, Search } from '@material-ui/icons';

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className='container'>
            <div className="left">
                <img src='https://cdn-icons.flaticon.com/png/512/2504/premium/2504965.png?token=exp=1648048648~hmac=d2df562d22f6426df179628fbc24a780' alt='logo'></img>  
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
            </div>
            <div className="right">
                <Search className='icon'></Search>
                <Notifications className='icon'></Notifications>
                <AccountCircle className='icon'></AccountCircle>
                <div className="userProfile">
                  <ArrowDropDown className='icon'></ArrowDropDown>
                  <div className="options"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
