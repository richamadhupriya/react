import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
                <Link to='/' className="navbar-brand">Home</Link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to='/oneplus' className="nav-link">OnePlus</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/asus' className="nav-link">Asus</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/mi' className="nav-link">Mi</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>
    )
}

export default Nav