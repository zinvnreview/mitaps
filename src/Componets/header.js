import React, { useEffect, useState } from "react";
import logo from '../Assets/Logo.png';
import "../Assets/css/loading.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ApiGate from '../Utils/api';

export default function Head() {
  const [isActive, setIsActive] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('mode') === 'dark');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    } else {
      root.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {isActive && <div className="page-loading active">
      <div className="page-loading-inner">
                <div className="page-spinner"></div><span></span>
              </div></div>}
      <div className="page-wrapper">
        <div className="header navbar navbar-expand-lg bg-light navbar-sticky">
          <div className="container px-3">
            <NavLink to="/" className="navbar-brand pe-3">
              <img src={logo} alt="MiTaps" width="90" />
            </NavLink>
            <div id="navbarNav" className="offcanvas offcanvas-end">
              <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><NavLink to="/" className="nav-link">Trang chủ</NavLink></li>
                  <li className="nav-item"><NavLink to="/game" className="nav-link">Trò chơi</NavLink></li>
                  <li className="nav-item"><NavLink to="/about-us" className="nav-link">Về chúng tôi</NavLink></li>
                  <li className="nav-item"><NavLink to="/news" className="nav-link">Tin tức</NavLink></li>
                  <li className="nav-item"><NavLink to="/gamevh" className="nav-link">Game việt hóa</NavLink></li>
                  <li className="nav-item"><a href="https://www.facebook.com/mitapsstudio" target="_blank" rel="noopener noreferrer" className="nav-link">Nạp thẻ</a></li>
                </ul>
              </div>
            </div>
            <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4" data-bs-toggle="mode">
              <input type="checkbox" className="form-check-input" id="theme-mode" onChange={toggleDarkMode} checked={darkMode} />
              <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Dark Mode</label>
            </div>
            <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
