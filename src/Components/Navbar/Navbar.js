import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcwP-iPnYgUQ6QIZMUap_QMpOe8fikDvaYw&usqp=CAU" alt="" width="120" /></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} to="/home"><a class="nav-link me-5 text-brand" href="#">Home</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link me-5 text-brand" style={{ textDecoration: 'none' }}>About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link style={{ textDecoration: 'none' }} to="/dashboard" class="nav-link me-5 text-brand">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link me-5 text-brand" style={{ textDecoration: 'none' }}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;