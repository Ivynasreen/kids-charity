import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcwP-iPnYgUQ6QIZMUap_QMpOe8fikDvaYw&usqp=CAU" alt="" width="120" /><strong className = "text-white ms-3">Kids Charity</strong></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} class="nav-link me-5 text-brand text-white" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link me-5 text-brand text-white" style={{ textDecoration: 'none'}}>About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/services" class="nav-link me-5 text-brand">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link me-5 text-brand" style={{ textDecoration: 'none' , color: 'white'}}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;