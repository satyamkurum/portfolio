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
              This refund and cancellation policy outlines how you can cancel
              or seek a refund for a product or service that you have
              purchased through the Platform. Under this policy:
            </p>
            <ul>
              <li>
                Cancellations will only be considered if the request is made
                within 2 days of placing the order. However, cancellation
                requests may not be entertained if the orders have been
                communicated to such sellers or merchant(s) listed on the
                Platform and they have initiated the process of shipping them,
                or the product is out for delivery. In such an event, you may
                choose to reject the product at the doorstep.
              </li>
              <li>
                MR SATYAM KURUM does not accept cancellation requests for
                perishable items like flowers, eatables, etc. However, the
                refund or replacement can be made if the user establishes that
                the quality of the product delivered is not good.
              </li>
              <li>
                In case of receipt of damaged or defective items, please
                report it to our customer service team. The request would be
                entertained once the seller/merchant listed on the Platform has
                checked and determined the same at its own end. This should be
                reported within 2 days of receipt of products. In case you
                feel that the product received is not as shown on the site or
                as per your expectations, you must bring it to the notice of
                our customer service within 2 days of receiving the product.
                The customer service team after looking into your complaint
                will take an appropriate decision.
              </li>
              <li>
                In case of complaints regarding the products that come with a
                warranty from the manufacturers, please refer the issue to
                them.
              </li>
              <li>
                In case of any refunds approved by MR SATYAM KURUM, it will
                take 1 day for the refund to be processed to you.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Refund;
