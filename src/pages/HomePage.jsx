import { Container, Row, Col } from 'react-bootstrap';
import HeroImange from "../assets/img/hero.png";
import {kelasTerbaru, dataSwiper} from "../data/index";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FunFact from '../pages/FunFact';

const HomePage = () => {
  let navigate = useNavigate();
  return <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className='header-box d-flex align-items-center pt-lg-5'>
          <Col lg="6">
          <h1 className='mb-4 animate__animated animate__fadeInUp overflow-hidden --animate-delay:0.5s;'> 
            Selamat Datang <br/> Sumatera Utara <br/> <br/>Horass.. Horass.. Horass.. Nungnga Ro Hamu di Huta Nami Sumatera Utara...</h1>
          <p className='mb-4 animate__animated animate__fadeInUp --animate-delay:0.5s;'></p>
          </Col>
          <Col lg="6" className='pt-lg-1 pt-3'>
          <img src={HeroImange} alt="hero-img"  className='animate__animated animate__fadeInRight overflow-hidden animate-duration:1s --animate-delay:0.5s;'/>
          </Col>
        </Row>
      </Container>
    </header>
    <div className=" adat widh-100 min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-bold animate__animated animate__fadeInUp overflow-hidden --animate-delay:0.5s;'>JENIS ADAT YANG ADA DI SUMATRA UTARA</h1>
          </Col>
        </Row>
        <Row>
        {kelasTerbaru.map((Adat) => (
          <Col key={Adat.id} className='shadow-sm' data-aos="fade-up" data-aos-duration="1200" data-aos-delay={Adat.delay}>
            <img src={Adat.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
            <h5 className='mb-5 px-3'>{Adat.title}</h5>
            <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
              <p className='m-0 text-primary fw-bold align-text-center'>{Adat.price}</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className='text-center'>
        <button className='btn btn-outline-danger rounded-5 btn-lg' onClick={() => navigate("/adat")}>Learn More<i className='fa-solid fa-chevron-right ms-2'></i></button>
        </Col>
      </Row>
      </Container>
    </div>
    <div className="Daerah py-5">
      <Container>
        <Row>
          <Col><h1 className='text-center fw-bold my-5'>JENIS TRADISI YANG ADA DI SUMATRA UTARA</h1>
          </Col>
        </Row>
        <Row>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return <SwiperSlide key={data.id} className='shadow-sm'>
            <p className='desc'>{data.desc}</p>
            <div className='people'>
              <img src={data.image} alt=""></img>
              <div>
                <h5 className='mb-1 fw-bold'>{data.nama}</h5>
                <p className='m-0'>{data.skill}</p>
              </div>
            </div>
          </SwiperSlide>   
        })}
      </Swiper>
        </Row>
      </Container>
    </div>
    <FunFact />
  </div>
};

export default HomePage;