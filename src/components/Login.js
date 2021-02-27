import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <Container style={{padding:"100px"}}>
            <Col md={6} className="mr-auto ml-auto">
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree to terms of service" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Form.Text className="text-muted">
    Don't have an account ? <Link to="/register">Register !</Link>
    </Form.Text>
</Form>
            </Col>
       
        </Container>

    )
}
