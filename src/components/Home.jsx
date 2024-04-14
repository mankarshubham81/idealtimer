import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <div className="text-center">
          <h1>Thise is Home Page</h1>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Home;