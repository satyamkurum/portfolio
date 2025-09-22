import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Return() {
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
              Return Policy
            </h1>
            <p>
              We offer a refund or exchange within the first day of your
              purchase. If one day has passed since your purchase, you will not
              be offered a return, exchange, or refund of any kind.
            </p>
            <h3>Eligibility for a Return or Exchange</h3>
            <p>
              In order to become eligible for a return or an exchange, the
              following conditions must be met:
            </p>
            <ul>
              <li>
                The purchased item must be unused and in the same condition as
                you received it.
              </li>
              <li>The item must be in its original packaging.</li>
              <li>
                If the item was purchased on sale, it may not be eligible for a
                return or exchange.
              </li>
            </ul>
            <p>
              Furthermore, we only replace items (based on an exchange request)
              if they are found to be defective or damaged.
            </p>
            <h3>Exemptions & Process</h3>
            <p>
              You agree that there may be certain categories of products or
              items that are exempt from returns or refunds. Such categories
              will be identified to you at the time of purchase.
            </p>
            <p>
              For accepted exchange or return requests, once your returned item
              is received and inspected by us, we will send you an email to
              notify you about the receipt of the item. If the return is
              approved after the quality check, your request (i.e., return or
              exchange) will be processed in accordance with our policies.
            </p>
          </Col>
        </Row>
         <h3>Contact Details</h3>
            <p>
              Email - satyamkurum@gmail.com
            </p>
            <p>
              Phone - +917999325282
            </p>
      </Container>
    </Container>
  );
}

export default Return;

