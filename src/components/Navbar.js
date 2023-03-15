import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong>Nandini </strong></a>
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#"> About</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div class="d-flex">
        <div class="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}  style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div class="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div class="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        <div class="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div>
      <div className={`form-check text-${props.mode==='light'?'dark':'light'} form-switch`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
    
  </div>
</nav>
  )
}
Navbar.propTypes={
  title:PropTypes.string,
}
Navbar.defaultProps={
  title:"beast",
}