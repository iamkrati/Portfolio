import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import mn from './images/mm.png';
const Navbar = () => {

    const backgroundImageUrl = 'https://images.unsplash.com/photo-1438986710423-1bf13038bc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    // const [color, changeColor] = useState("white");

    function aboutcolor(color1) 
    {
        // changeColor(color1);
        document.body.style.backgroundImage = null
        document.body.style.backgroundColor = color1;
    }
    function expskill() 
    {
        document.body.style.backgroundColor = null;
        document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    }
    function exp() 
    {
        document.body.style.backgroundImage = null
        document.body.style.backgroundColor = 'rgb(221, 228, 236)';
    }
    const location = useLocation();
    const isHome = location.pathname === '/';
    const navbarStyle =
    {
        backgroundColor:  'white',
    };

    const styles = {
        c: {
            '&:hover':
            {
                color: 'black',
            },
        },
    };


    console.log(navbarStyle)


    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={navbarStyle} >
                <div className="container-fluid">
                    {isHome ? (
                        <Link className="navbar-brand" to="#">
                            <img src={mn} alt="Your Image Alt Text" />
                        </Link>
                    ) : <h5 style={{ color:'black' }}>me@krati</h5>}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav hoo ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" style={styles.c}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about" style={styles.c} onClick={() => aboutcolor("black")}   >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" to="/ExpEdu" style={styles.c} onClick={() => exp()}>Exp &
                                    Edu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" to="/project" style={styles.c} onClick={() => expskill()}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  active" to="skills" style={styles.c} onClick={() => expskill()} >Skills</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}




export default Navbar