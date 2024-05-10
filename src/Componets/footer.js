import React from 'react';
import GameLogo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Foot() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // for smooth scrolling
        });
      };
    return (
        <>
         <footer className="footer pt-5 pb-4 pb-lg-5">
            <div className="container text-center pt-lg-3">
                <div className="navbar-brand justify-content-center text-dark">
                    <img src={GameLogo} className="light-mode-img me-2" width="150" alt="MiTaps" />
                    <img src={GameLogo} className="dark-mode-img me-2" width="150" alt="MiTaps" />
                </div>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><Link to={"/"} className="nav-link">Trang chủ</Link></li>
                    <li className="nav-item"><Link to={"/game/info"} className="nav-link">Nam Đế Truyền Kỳ</Link></li>
                    <li className="nav-item"><a href="" className="nav-link">Điều Khoản</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Chính Sách Bảo Mật</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Facebook</a></li>
                </ul>
                <div className="d-flex justify-content-center mt-lg-3">
                    <a href="https://www.facebook.com/mitapstudio" className="btn btn-icon btn-secondary btn-facebook mx-2" aria-label="Facebook">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.youtube.com/@ZinVnReview" className="btn btn-icon btn-secondary btn-youtube mx-2" aria-label="YouTube">
                        <i className="bx bxl-youtube"></i>
                    </a>
                    <a href="#" className="btn btn-icon btn-secondary btn-instagram mx-2" aria-label="Instagram">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-icon btn-secondary btn-twitter mx-2" aria-label="Twitter" onClick={scrollToTop}>
                        <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
                    </a>
                </div>
                <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
                    <span className="opacity-80">© All rights reserved. Made by </span>
                    <a className="nav-link d-inline-block p-0" href="" target="_blank" rel="noopener">MiTaps Studio</a>
                </p>
            </div>
        </footer>
                  </>
    );
};