import { Container, Row, Col } from "react-bootstrap";
import { crew } from "../data/index";

const CrewPage = () => {
  return (
    <div className="crew-page">
     <div className="crew">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold">CREW MEMBER</h1>
          <p className="text-center"></p>
          </Col>
        </Row>
        <Row className="row-cols-lg-4 row-cols-1">
        {crew.map((data) => {
          return <Col key={data.id} className='mb-5'>
            <p className='desc shadow-sm'>{data.desc}</p>
            <div className='people'>
              <img src={data.image} alt=""></img>
              <div>
                <h5 className='mb-1 fw-bold'>{data.nama}</h5>
                <p className='m-0'>{data.skill}</p>
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

export default CrewPage;
