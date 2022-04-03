import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='d-flex justify-content-center my-4 fs-3'>
            <Link  className='ms-4 text-decoration-none text' to='/'>Home</Link>
            <Link  className='ms-4 text-decoration-none text' to='/reviews'>Reviews</Link>
            <Link  className='ms-4 text-decoration-none text' to='/dashboard'>Dashboard</Link>
            <Link  className='ms-4 text-decoration-none text' to='/blogs'>Blogs</Link>
            <Link  className='ms-4 text-decoration-none text' to='/about'>About</Link>
            
        </div>
    );
};

export default Navbar;