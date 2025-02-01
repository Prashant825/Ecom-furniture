import React from 'react'
import HeaderLogo from '../assets/images/header-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function header() {
    return (
        <div>

            {/* <!-- Header Section --> */}
            <header className="text-white py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    {/* <!-- Logo --> */}
                    <div className="logo">
                        <Link to="/" className="text-white fs-4 text-decoration-none"><img src={HeaderLogo} alt="logo-img" height={80} width={80} /></Link>
                    </div>

                    {/* <!-- Navigation --> */}
                    <div className="d-flex">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <ul className="navbar-nav d-flex">
                                <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to='/shop' className="nav-link">Shop</Link></li>
                                <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
                                <li className="nav-item"><Link to='/login' className="nav-link">Login</Link></li>
                                <li className="nav-item"><Link to='/register' className="nav-link">Register</Link></li>
                                <li className="nav-item"><Link to='/cart' className="nav-link"><FaShoppingCart style={{ fontSize: '22px', color: 'white' }} /></Link></li>
                            </ul>
                        </nav>

                        {/* <!-- Search Bar --> */}
                        {/* <input type="text" className="form-control me-2" placeholder="Search products..." />
                        <button className="btn btn-warning">Search</button> */}
                    </div>
                </div>
            </header>
        </div>
    )
};
