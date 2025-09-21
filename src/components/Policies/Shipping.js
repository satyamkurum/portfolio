import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Shipping() {
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
              Shipping Policy
            </h1>
            <p>
              The orders for the user are shipped through registered domestic
              courier companies and/or speed post only. Orders are shipped
              within 2 days from the date of the order and/or payment or as per
              the delivery date agreed at the time of order confirmation and
              delivering of the shipment, subject to courier company / post
              office norms.
            </p>
            <p>
              Platform Owner shall not be liable for any delay in delivery by
              the courier company / postal authority. Delivery of all orders
              will be made to the address provided by the buyer at the time of
              purchase.
            </p>
            <p>
              Delivery of our services will be confirmed on your email ID as
              specified at the time of registration. If there are any shipping
              cost(s) levied by the seller or the Platform Owner (as the case
              be), the same is not refundable.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Shipping;

