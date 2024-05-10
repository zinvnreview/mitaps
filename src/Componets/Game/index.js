import React from "react";
import Head from "../header";
import Foot from "../footer";
import { Link } from 'react-router-dom';


export default function Games() {
const HomeTitle = "Trang chủ";
const ListTitle = "Danh Sách Trò Chơi";
const LogoGame = require("../../Assets/game/ndtk.png");
const InfoGameTitle = "Nam Đế Truyền Kỳ - Game nhập vai màn hình ngang và có cột truyện theo đúng lịch sử Việt Nam. Game được sản xuất và phát hành bởi đội ngũ Việt - MiTaps Studio";
    return (
        <>
          <Head />
          <nav className="container py-4 mb-lg-2" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/"><i className="bx bx-home-alt fs-lg me-1"></i>{HomeTitle}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{ListTitle}</li>
                </ol>
            </nav>

            <section className="container pb-2 pb-lg-3 position-relative">
                <article className="card border-0 shadow-sm mb-4 card-hover border-success">
                    <div className="card-body">
                        <div className="row p-3">
                            <div className="rellax col-md-4 text-center pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
                                <Link to="/game/dai-Tay-Du-1">
                                    <img src={LogoGame} className="rounded-circle" width="300" alt="Nam Đế Truyền Kỳ" />
                                </Link>
                            </div>
                            <div className="rellax col-md-8" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
                                <div className="ps-md-4 ms-md-2">
                                    <h2 className="h3"><Link to="/game/info">Nam Đế Truyền Kỳ</Link></h2>
                                    <p>{InfoGameTitle}</p>
                                    <Link to="/game/info" className="btn btn-outline-success"><i className='bx bx-download'></i> Tải Game</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>  
            <Foot />
        </>
    );
}