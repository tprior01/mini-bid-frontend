import React from 'react'
import './Navbar.css'

export default function NavbarLoggedOut() {
    return (
      <div className="navbar">
      <a href="https://mini-bid.herokuapp.com//home">Home</a>
      <a href="https://mini-bid.herokuapp.com/login">Login</a>
      <a href="https://mini-bid.herokuapp.com/register">Register</a>

      <a href="https://mini-bid.herokuapp.com/sell">Sell Item</a>

      <div className="dropdown">
        <button className="dropbtn">Browse Items
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="https://mini-bid.herokuapp.com/available">Available</a>
          <a href="https://mini-bid.herokuapp.com/sold">Sold</a>
        </div>
      </div>
    </div> 
    )
  }