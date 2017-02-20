import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-2 col-xs-offset-9"><Link to="/resume">Resume</Link></div>
      </div>
    </div>
  )
}

export default NavBar
