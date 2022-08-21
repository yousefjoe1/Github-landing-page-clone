import React from 'react'

// nav bar + globe + hero content
const TopNav = () => {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <a className="navbar-brand bg-black px-2 rounded-xl" href="#">
      <img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 parent-nav-ul  mb-lg-0">
        <li className="nav-item product-link cursor-pointer">
        <a className="nav-link dropdown-toggle">
            Product
          </a>
          <ul className="dropdown-menu product-ul text-red-600" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a href='#' className="nav-link">Enterprise</a>
        </li>
        <li className="nav-item explore-link">
        <a href='#' className="nav-link dropdown-toggle">
            Explore
          </a>
          <ul className="dropdown-menu explore-ul" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
            <a href='#' className="nav-link">Marketplace</a>
          </li>
          <li className="nav-item pricing-link">
        <a href='#' className="nav-link dropdown-toggle">
            Pricing
          </a>
          <ul className="dropdown-menu pricing-ul" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Action</a></li>
          </ul>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Github" aria-label="Search"/>
      </form>

      <ul className='navbar-nav log-sign'>
        <li className="nav-item">
          <a className='nav-link' href="">Sign in</a>
        </li>

        <li className="nav-item border-2 rounded-md">
          <a className='nav-link' href="">Sign up</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default TopNav;