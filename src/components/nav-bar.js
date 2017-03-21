import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-8"><Link to="/">Home</Link></div>
        <div className="col-xs-1"><Link to="/projects">Projects</Link></div>
        <div className="col-xs-1"><Link to="/resume">Resume</Link></div>
        <div className="col-xs-1"><Link to="/contact">Contact</Link></div>
      </div>
      <div style={{textAlign: "center", borderBottomStyle: "ridge"}}><h1>z a c k _ a d a m s</h1></div>
    </div>
  )
}

export default NavBar
