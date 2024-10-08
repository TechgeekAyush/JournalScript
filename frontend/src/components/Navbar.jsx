import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const [theme, setTheme] = useState('light');

    function handleTheme() {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            setTheme('light');
        }
    }

    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">JournalScript</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? <><Link className="btn btn-success m-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-success m-1" to="/signup" role="button">Sign Up</Link></>:<button className='btn btn-success' onClick={handleLogout}>Logout</button>}
                    <button className="btn btn-outline-success m-1" onClick={handleTheme}>Light/Dark</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar