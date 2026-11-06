import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Nav'>
        <h2>Khatu gigs</h2>
        <div className='link'>
    <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/about'>About</Link>
        </div>


    </div>
  )
}

export default Navbar
