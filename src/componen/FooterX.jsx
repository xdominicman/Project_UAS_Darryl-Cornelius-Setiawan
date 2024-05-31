import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const FooterX = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg="5">
           <h3 className='fw-bold'>Thank You For Visiting our Website</h3>
           <p className='desc'>Mauliate Nungnga Ro Hamu Tu Website Nami on Sumatera Utara, Horas Jala Gabe.</p>
           <div className='data mb-4'>
           <h3 className='fw-bold'></h3>
           </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to="/">Home</Link>
          <Link to="about">Lingkungan</Link>
          <Link to="adat">Adat & Budaya</Link>
          <Link to="fun">Fun Fact</Link>
          <Link to="crew">Crew Member</Link>
          </Col>
          <Col lg="4" className='mt-lg-0 mt-5'>
          <div className='social mt-3'>
          <a href="https://www.youtube.com/channel/UCNwwZYfFnLQHHFSraEtSU3A" target="_blank">
               <i className='fa-brands fa-youtube'></i></a>
            <a href="https://x.com/pemprovsu?lang=en" target="_blank">
               <i className='fa-brands fa-twitter'></i></a>
            <a href="https://www.instagram.com/pemprovsumut/?hl=en" target="_blank">
              <i className='fa-brands fa-instagram'></i></a>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className='text-center px-md-0 px-3'>&copy; Copyright, {new Date().getDate()}- {new Date().getMonth()}- {new Date().getFullYear()} by Kelompok 3 (IF231-I)</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterX