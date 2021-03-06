import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const LogoutClicked = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ fontWeight: "bold" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li> */}
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className="btn btn-outline-dark mx-2" style={{ color: "white", textDecoration: "none" }} to="/login" role="button">Login</Link>
                            <Link className="btn btn-outline-dark mx-2" style={{ color: "white", textDecoration: "none" }} to="/signup" role="button">SignUp</Link>
                        </form> :<><button type="button" className="btn btn-outline-dark" onClick={LogoutClicked} style={{color: "white"}}>Logout</button></>}
                    </div>
                </div>
            </nav>
        </>
    )
}
