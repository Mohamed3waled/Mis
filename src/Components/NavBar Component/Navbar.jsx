import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Logo from './Img/WhatsApp Image 2022-11-05 at 20.26 2.png'

export default function Navbar() {


      // No Reload
  function reload(e) {
    e.preventDefault()
  }

  return <>
  <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to = '/home' ><img src= {Logo} className="w-50" alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5 px-5 justify-content-center text-center" id="navbarNavDropdown">
                    <div className="w-75 d-flex justify-content-evenly navbar-collapse flex-menu">
                        <div className="dropdown">
                            <Link to = ''  className="dropbtn">
                                Home
                            </Link>
                            <div className="dropdown-content">
                                <Link to = './personnal'  className="menu-link">Personnel Affairs Department</Link>
                                <Link to = ''  className="menu-link">Student Affairs Department</Link>
                                <Link to = ''  className="menu-link">Bus management</Link>
                                <Link to = ''  className="menu-link">Store Management</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link to = ''  className="dropbtn">
                                Profile
                            </Link>
                            <div className="dropdown-content">
                                <Link to = '/profile'  className="nav-link">View Profile</Link>
                                <Link to = '/signup'  className="nav-link">Add Account</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link className="dropbtn">
                                Logout
                            </Link>
                            <div className="dropdown-content">
                                <Link to = './login'  className="nav-link">Logout</Link>
                            </div>
                        </div>
                    </div>
                    <form className="d-flex" role="search" onSubmit={reload}>
                        <input className="form-control me-2 input_search" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success search" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </nav>
  
  
  </>
}
