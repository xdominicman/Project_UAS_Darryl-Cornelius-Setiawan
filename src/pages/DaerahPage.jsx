import { Container, Row, Col } from "react-bootstrap";
import { daerah } from "../data/index";
import Map from "../assets/img/kelas/Map.png";

const DaerahPage = () => {
  return (
    <div className="daerah-page">
     <div className="daerah">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold">LINGKUNGAN SUMATERA UTARA</h1>
          <p className="text-center"></p>
          </Col>
        </Row>
        <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/EFEeFdZg2F4?autoplay=1" frameborder="0" allowfullscreen></iframe>
        </div>
        <br/>
        <div>
          <img src={Map} alt="Map" />
        </div>
        <br/>
        <Row className="row-cols-lg-3 row-cols-1">
        {daerah.map((data) => {
          return <Col key={data.id} className='mb-5'>
            <p className='desc shadow-sm text-color-black fw-bold' text-size="20px">{data.desc}</p>
            <div className='people'>
              <img src={data.image} alt=""></img>
              <div>
                <h5 className='mb-1 fw-bold' text-size='20px'>{data.nama}</h5>
                <p className='m-0 text-color-black'>{data.skill}</p>
              </div>
            </div>
          </Col>   
        })}
        </Row>
      </Container>
     </div>
    </div>
  )
};

export default DaerahPage;