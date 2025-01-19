import React from 'react'
import HeaderLogo from '../assets/images/header-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
export default function header() {
  return (
    <div>

{/* <!-- Header Section --> */}
    <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
            {/* <!-- Logo --> */}
            <div className="logo">
                <a href="#" className="text-white fs-4 text-decoration-none"><img src={HeaderLogo} alt="logo-img" height={80} width={80} /></a>
            </div>

            {/* <!-- Navigation --> */}
            <div className="d-flex">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <ul className="navbar-nav d-flex">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Shop</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><FaShoppingCart style={{fontSize: '22px', color: 'white'}}/></a></li>
                </ul>
            </nav>

            {/* <!-- Search Bar --> */}
                <input type="text" className="form-control me-2" placeholder="Search products..."/>
                <button className="btn btn-warning">Search</button>
            </div>
        </div>
    </header>
    </div>
  )
};
