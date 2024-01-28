import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg suff ">
  <div className="container-fluid">
    <Link className="navbar-brand home" to={'/'}>News</Link>
    <button className="navbar-toggler bttns" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars navbar-toggler-icon"></i>    
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
            <Link className='nav-link  abc' to={'/'}>HOME</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link abc' to={'/about'}>SPORTS</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link abc' to={'/login'}>POLITICIAN</Link>
        </li>
      </ul>
      <form className="d-flex searchBar" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

































        {/* ============================================================= */}
           {/* <Link to={'/'}> <div>Home</div> </Link> */}
        {/* <nav>
            <Link id='home' to={'/'}><div>NEWS</div></Link>
            <div className="links">
           <Link className='abc' to={'/about'}> <div>SOPRTS</div> </Link>
           <Link className='abc' to={'/login'}> <div>POLITICIAN</div> </Link>
            </div>
            <div className="searchBar">
                <input className='form-control' type="text" placeholder='Search' />
                <button className='btn btn'>Search</button>
            </div>
        </nav> */}
        {/* ============================================================= */}
    </div>
  )
}
