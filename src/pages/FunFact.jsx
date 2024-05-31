import {Container, Row, Col, Accordion} from 'react-bootstrap'
import { fun } from "../data/index";

const FunFact = () => {
  return (
    <div className='fun'>
        <Container>
            <Row className='pt-5'>
                <Col>
                <h2 className='text-center fw-bold'>FUN FACT TENTANG SUMATRA UTARA</h2>
                </Col>
            </Row>
            <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'> {/*ini sebuah note aja kalau ini berguna untuk membuat menjadi 2 row dalam pixel 992 */}
                {fun.map((data) => {
                    return <Col key={data.id}>
                    <Accordion className='shadow-sm'>
                         <Accordion.Item eventKey={data.eventKey}>
                         <Accordion.Header>{data.title}</Accordion.Header>
                         <Accordion.Body>{data.desc}</Accordion.Body>
                         </Accordion.Item>
                      </Accordion>
                   </Col>       
                })}
            </Row>
        </Container>
    </div>
  )
}

export default FunFact;