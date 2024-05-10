import React, {useState} from 'react';
import Head from '../header';
import Foot from '../footer';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Info() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const slides = [
    {
      url: "https://www.youtube.com/embed/BYo9aG6zN-c?si=Vws45dKPRQq8eqVB?autoplay=1",
      img: "http://zin.vn:3000/static/media/info.cf2ff641bbd14cad5b9d.png",
      caption: "https://www.youtube.com/",
      isVideo: true
    }
  ];
  const links = [{
    gameurl: "https://www.youtube.com",
    appstore: "https://www.apple.com/app-store/",
    googleplay: "https://www.google.com/play",

  }];
const HomeTitle = "Trang chủ";
const ListTitle = "Trò Chơi";
const GameInfo = "Nam Đế Truyền Kỳ";
const CompanyInfo = "MiTaps Studio";
const GameTitles = "Nam Đế Truyền Kỳ";
const GameLogo = require("../../Assets/game/ndtk.png");
const Banner = require('../../Assets/game/info.png');

    return (
        <>
         <Head />
          <nav className="container py-4 mb-lg-2" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/"><i className="bx bx-home-alt fs-lg me-1"></i>{HomeTitle}</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                    <Link to="/game"><i className="bx bx-home-alt fs-lg me-1"></i>{ListTitle}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{GameInfo}</li>

                </ol>
            </nav>
            <section className="container pb-4 mb-2 mb-lg-3">
        <h1>{GameInfo}</h1>
        <p className="text-muted mb-0">Nhập Vai / Phiêu Lưu</p>
      </section>
      <Parallax 
      bgImage={Banner} 
      strength={400}>
      <div style={{ height: 400 }} className="d-none d-xxl-block"></div>
      <div style={{ height: 460 }} className="d-none d-lg-block d-xxl-none"></div>
      <div style={{ height: 350 }} className="d-none d-md-block d-lg-none"></div>
      <div style={{ height: 300 }} className="d-md-none"></div>
    </Parallax>
    <section className="container py-5 my-1 my-md-4 my-lg-5">
      <div className="row">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <div className="pe-lg-4 me-lg-3 pe-xl-0 me-xl-0">
            <h2 className="h1 mb-4">Giới Thiệu</h2>
            <div className="ps-lg-4 ms-lg-3">
	    </div>
            <div className="fs-lg mb-0">
              <p>{GameInfo} - Game nhập vai màn hình ngang chuẩn theo lịch sử dân tộc<br />
              Game được sản xuất và phát hành bởi đội ngũ Việt - {CompanyInfo}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-4 offset-xl-1 border-start-lg">
          <div className="position-relative">
            
            <div className="text-center game-store">
              <img src="http://zin.vn:3000/static/media/ndtk.b9f17af3772833b1df89.png" className="rounded-circle" width="100" alt="Game Icon" />
            </div>
            <div className="mb-4 my-2 text-center">
            {links.map((link) => (
              <Link to={link.appstore} target='_bank' className="btn btn-dark btn-lg px-3 py-2">
                <img src="https://g4m.vn/images/appstore-light.svg" className="light-mode-img" width="139" alt="App Store" />
                <img src="https://g4m.vn/images/appstore-dark.svg" className="dark-mode-img" width="139" alt="App Store" />
              </Link>
                ))}
              </div>
              {links.map((link) => (
              <div className="mb-4 my-2 text-center">
              <Link to={link.googleplay} target='_bank' className="btn btn-dark btn-lg px-3 py-2">
                <img src="https://g4m.vn/images/googleplay-light.svg" className="light-mode-img" width="139" alt="Google Play" />
                <img src="https://g4m.vn/images/googleplay-dark.svg" className="dark-mode-img" width="139" alt="Google Play" />
              </Link>
              </div>  
              ))}
              {links.map((link) => (
              <Link to={link.gameurl}target='_bank' className="btn btn-lg btn-outline-secondary text-center">
                <i class="bx bx-link"></i>
                {GameInfo}
              </Link>
            ))}

            </div>
          </div>
        </div>
    </section>

    <section className="container">
      <div className="position-relative px-md-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
         
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }}
          className="swiper pt-1"
        >
          <div className="swiper-wrapper gallery">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
              <a onClick={handleShow} className="gallery-item video-item rounded-3" data-sub-html={`<h6 class="fs-sm text-light">${slide.caption}</h6>`}>
                <img src={slide.img} alt={slide.caption} />
              </a>
              </div>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
        <div className="swiper-pagination position-relative pt-3 pt-sm-4 mt-4"></div>
      </div>
    </section>
    <section className="container mt-2 mt-md-4 mt-lg-5 mb-xl-2">
        <h2 className="h1 text-center pt-2 pt-md-3 pb-4 mb-2 mb-lg-3">Có thể bạn thích!</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            560: { slidesPerView: 3 },
            1000: { slidesPerView: 5 }
          }}
          className="swiper"
        >
          <SwiperSlide>
            <div className="card card-portfolio">
              <div className="card-img">
                <img src={GameLogo} className="rounded-circle" alt="Nam Đế Truyền Kỳ" />
              </div>
              <div className="card-body">
                <h4 className="h4 mb-2 text-center">
                  <a href="" className="stretched-link">{GameTitles}</a>
                </h4>
                <div className="card-portfolio-meta text-center">
                  <span className="text-muted">Sắp ra mắt</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination position-relative pt-sm-2 mt-4"></div>
      </section>
      <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Watch Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {slides.map((slide) => (
                    <iframe
                        width="100%"
                        height="450"
                        src={slide.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                  ))}
                </Modal.Body>
            </Modal>
      <Foot/>
    </>
    );
}
