import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{textAlign: "center"}}>
        <Link to="/"><button className="col-sm-1 col-sm-offset-7 btn btn-default btn-md" type="button" >Home</button></Link>
        <Link to="/projects"><button className="col-sm-1 btn btn-default btn-md" type="button" >Projects</button></Link>
        <Link to="/resume"><button className="col-sm-1 btn btn-default btn-md" type="button" >Resume</button></Link>
        <Link to="/blog"><button className="col-sm-1 btn btn-default btn-md" type="button" >Blog</button></Link>
        <Link to="/contact"><button className="col-sm-1 btn btn-default btn-md" type="button" >Contact</button></Link>
      </div>
      <div style={{textAlign: "center", borderBottomStyle: "ridge"}}><h1>z a c k _ a d a m s</h1></div>
    </div>
  )
}

export default NavBar
