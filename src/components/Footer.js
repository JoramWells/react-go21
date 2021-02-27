import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Footer() {
  return (
    <>
      <Container fluid  style={{backgroundColor:"hsl(0, 0%, 45%)", color:"white", padding:"25px"}} >
        <Row>

          <Col> <h6>FAQ</h6><ol>
              <li>How to make payment</li>
              <li>How to submit assignment</li>
              <li>Refund</li>
              </ol> 
          </Col>
          <Col> <h6>Terms and Privacy</h6> 
          <ol>
              <li>Preferences</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
          </ol>
          </Col>
          <Col> 
          <h6>Social accounts</h6> 
          <ol>
              <li>facebook</li>
              <li>linkedin</li>
              <li>twitter</li>
          </ol>
          </Col>

        </Row>
      </Container>
      <footer>
        <h5>Footer</h5>
      </footer>
    </>
  );
}
