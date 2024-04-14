import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <div className="text-center">
          {/* Your content goes here */}
          <h1>Login page</h1>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Login;