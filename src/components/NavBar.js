import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    const navStyle = {
      color: 'white'
    };

  return(
    <div className='NavBar'>
      <ul className="nav-links">
        <Link style={navStyle} to='/' ><li>Home</li></Link>
        <Link style={navStyle} to='/companies/new'><li>Add Company</li></Link>
        <Link style={navStyle} to='/companies'><li>Companies</li></Link>

      </ul>
    </div>
  )
}

export default NavBar
