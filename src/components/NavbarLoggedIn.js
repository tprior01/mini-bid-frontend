import React from 'react'
import './Navbar.css'

export default function NavbarLoggedIn() {
    return (
      <div className="navbar">
      <a href="https://mini-bid.herokuapp.com/home">Home</a>
      <a href="https://mini-bid.herokuapp.com/logout">Logout</a>
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