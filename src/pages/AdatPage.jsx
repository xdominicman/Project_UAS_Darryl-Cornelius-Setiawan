import { Container, Row, Col } from "react-bootstrap";
import { adat } from "../data/index";

const AdatPage = () => {
  return (
    <div className="adat-page">
    <div className="adat min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">ADAT & BUDAYA</h1>
          </Col>
        </Row>
        <Row>
        {adat.map((Adat) => (
          <Col key={Adat.id} className='shadow-sm' data-aos="fade-up" data-aos-duration="1200" data-aos-delay={Adat.delay}>
            <img src={Adat.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
            <h5 className='mb-5 px-3'>{Adat.title}</h5>
            <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
              <p className='m-0 text-color-black fw-bold'>{Adat.price}</p>
            </div>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default AdatPage