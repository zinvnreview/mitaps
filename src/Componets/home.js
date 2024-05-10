import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
const company = "MiTaps Studio";
const Authors = [
  "là một công ty trẻ được thành lập vào năm 2023 sau công nguyên với sứ mệnh mang đến niềm vui, ",
  "sự giải trí và một góc nhìn tích cực về trò chơi điện tử tại thị trường Việt Nam."
];
const GameNames = ["Nam Đế Truyền Kỳ", "vv...."];
const Info = [
  "Chúng tôi phát triển ",
  company,
  " với các sản phẩm chủ lực và mang tính chất lịch sử của dân tộc như ",
  GameNames.join(", "),
  ". Hơn nữa, chúng tôi không ngừng nỗ lực phát triển bản thân để có thể mang đến thị trường nhiều sản phẩm mới, thú vị hơn."
];
const hr = "hr@mitapsstudio.vn";
const Logo = require("../Assets/Logo.png");
const GameLogo = require("../Assets/game/ndtk.png");
const fullDescription = Info.join("");
const testimonials = [
  {
    id: 1,
    text: "Game rất hay gắn liền với tuổi thơ nhiều người",
    author: "Test",
    game: "Nam Đế Truyền Kỳ",
    imageUrl: "http://localhost:3000/static/media/ndtk.b9f17af3772833b1df89.png"
  }
];
const GameTitles = "Nam Đế Truyền Kỳ";
  return (
    <>
      <section className="position-relative">
        <div className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0" style={{ backgroundImage: 'url(https://g4m.vn/images/hero-bg.svg)' }}>
          <div className="d-lg-none" style={{ height: '960px' }}></div>
          <div className="d-none d-lg-block" style={{ height: '768px' }}></div>
        </div>
        <div className="container position-relative zindex-5 pt-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="pb-2 pb-md-3">về <b className="text-maincl">{company}</b></h1>
              <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{ maxWidth: '526px' }}>
                {company} {Authors} {fullDescription}

              </p>
            </div>
            <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
              <div className="row row-cols-2 gx-3 gx-lg-4">
                <div className="col pt-lg-5 mt-lg-1">
                  <img src={GameLogo} className="d-block rounded-3 mb-3 mb-lg-4 img-thumbnail rounded-circle" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-3 mb-5 pt-lg-5">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 2 },
            991: { slidesPerView: 3 }
          }}
          className="pt-4"
        >
          <SwiperSlide className="border-end-lg px-2">
            <div className="text-center">
              <img src="https://g4m.vn/images/icons/idea.svg" width="48" alt="Bulb icon" className="d-block mb-4 mx-auto" />
              <h4 className="mb-2 pb-1">Sáng Tạo</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-end-lg px-2">
            <div className="text-center">
              <img src="https://g4m.vn/images/icons/award.svg" width="48" alt="Award icon" className="d-block mb-4 mx-auto" />
              <h4 className="mb-2 pb-1">Giải Thưởng</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-2">
            <div className="text-center">
              <img src="https://g4m.vn/images/icons/team.svg" width="48" alt="Team icon" className="d-block mb-4 mx-auto" />
              <h4 className="mb-2 pb-1">Đội Ngũ Chuyên Nghiệp</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="container mt-2 mt-md-4 mt-lg-5 mb-xl-2" style={{padding: 40}}>
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
      <section className="container py-5 mt-n2">
        <div className="card border-0 bg-gradient-success card border-0 bg-gradient-primary">
          <div className="card-body p-md-5 p-4 bg-size-cover" style={{ backgroundImage: 'url(http://teamobi.com/home/images/contact-bg.png)'}}>
            <div className="py-md-5 py-4 text-center">
              <h3 className="h4 fw-normal text-light opacity-75">Muốn làm việc với chúng tôi không? Hãy nói chuyện nhé</h3>
              <a href="mailto:hr@mitapsstudio.vn" className="display-6 text-light">{hr}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container text-center my-2 my-md-4">
        <h2 className="h1 mb-4">Chúng tôi có mạng xã hội</h2>
        <p className="fs-lg text-muted pb-2 mb-5">Theo dõi chúng tôi và cập nhật những tin tức mới nhất!</p>
        <Swiper
          slidesPerView={2}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            500: { slidesPerView: 2 },
            650: { slidesPerView: 3 }
          }}
          className="swiper"
        >
          <SwiperSlide>
            <div className="position-relative text-center border-end mx-n1">
              <a target="_blank" href="https://www.facebook.com/mitapsstudio" className="btn btn-icon btn-secondary btn-facebook btn-lg stretched-link">
                <i className="bx bxl-facebook"></i>
              </a>
              <div className="pt-4">
                <h6 className="mb-1">Facebook</h6>
                <p className="fs-sm text-muted mb-0">MiTaps Studio</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative text-center border-end mx-n1">
              <a target="_blank" href="https://youtube.com/@ZinVnReview" className="btn btn-icon btn-secondary btn-youtube btn-lg stretched-link">
                <i className="bx bxl-youtube"></i>
              </a>
              <div className="pt-4">
                <h6 className="mb-1">Youtube</h6>
                <p className="fs-sm text-muted mb-0">Zin Review - MiTaps Studio</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative text-center border-end mx-n1">
              <a target="_blank" href="https://www.instagram.com/" className="btn btn-icon btn-secondary btn-instagram  btn-lg stretched-link">
                <i className="bx bxl-instagram"></i>
              </a>
              <div className="pt-4">
                <h6 className="mb-1">Instagram</h6>
                <p className="fs-sm text-muted mb-0"></p>
              </div>
            </div>
          </SwiperSlide>
          {/* Additional SwiperSlides for other social networks */}
        </Swiper>
        <div className="swiper-pagination position-relative bottom-0 pt-3 mt-4"></div>
      </section>
    </>
  );

};

