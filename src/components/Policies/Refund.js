import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Refund() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            className="policy-text"
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left",
            }}
          >
            <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
              Refund and Cancellation Policy
            </h1>
            <p>
              We DO NOT provide any Refunds.
            </p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Refund;
