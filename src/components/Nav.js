import React from 'react'
import Logo from './itrebels.png';

const Nav = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="top">
  <div className="container-fluid">
  <div className="container">
    <a className="navbar-brand" href="https://kritiksah.netlify.app/">
      <img src={Logo} alt="" width="30" height="30" /><span> IT Rebels</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer"  href="https://kritiksah.netlify.app/#about">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer"  href="https://kritiksah.netlify.app/#portfolio">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  target="_blank" rel="noreferrer"  href="https://kritiksah.netlify.app/#CERTIFICATIONS">CERTIFICATIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.fiverr.com/kritiksah">TESTIMONIALS</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-outline-danger" href="https://wa.link/xpwssg" target="_blank" rel="noreferrer">CONTACT US</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
    )
}

export default Nav
