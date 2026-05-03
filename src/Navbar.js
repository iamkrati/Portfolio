import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import mn from './images/mm.png';

const BG_PHOTO =
  'https://images.unsplash.com/photo-1438986710423-1bf13038bc14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/ExpEdu', label: 'Experience' },
  { to: '/project', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
];

function syncBodyBackground(pathname) {
  if (pathname === '/about') {
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = '#0a0a0f';
  } else if (pathname === '/ExpEdu') {
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = 'rgb(221, 228, 236)';
  } else if (pathname === '/project' || pathname === '/skills') {
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = `url(${BG_PHOTO})`;
    document.body.style.backgroundSize = 'cover';
  } else {
    document.body.style.backgroundColor = '#eef2f6';
    document.body.style.backgroundImage = '';
  }
}

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    syncBodyBackground(location.pathname);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `site-nav-link${isActive ? ' site-nav-link--active' : ''}`;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg site-navbar">
        <div className="container-fluid site-nav-inner">
          <Link className="navbar-brand site-brand" to="/" title="Krati Goyal — Home">
            <img src={mn} alt="Krati Goyal" className="site-brand-logo" />
          </Link>
          <button
            className="navbar-toggler site-nav-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#siteNavCollapse"
            aria-controls="siteNavCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="siteNavCollapse">
            <ul className="navbar-nav site-nav-list ms-auto">
              {NAV_ITEMS.map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={linkClass}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
