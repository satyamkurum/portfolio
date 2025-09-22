import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Services() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          Crafting digital experiences tailored to your needs.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Card 1: Basic Portfolio Website */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Basic Portfolio Website</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A professional online presence to showcase your work or personal
                  brand. Perfect for artists, freelancers, and consultants.
                </Card.Text>
                <ul>
                  <li className="service-feature">Up to 5 Pages</li>
                  <li className="service-feature">Mobile-Responsive Design</li>
                  <li className="service-feature">Contact Form</li>
                </ul>
                <div className="service-price">₹9,999</div>
                <Button variant="primary" href="#" disabled>
                
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2: Dynamic Business Website */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Dynamic Business Website</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A powerful website with a Content Management System (CMS) that
                  allows you to easily update content and post blogs.
                </Card.Text>
                <ul>
                  <li className="service-feature">CMS Integration</li>
                  <li className="service-feature">Unlimited Pages & Blog</li>
                  <li className="service-feature">SEO Friendly</li>
                </ul>
                <div className="service-price">₹24,999</div>
                <Button variant="primary" href="#" disabled>
              
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3: E-commerce Store */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>E-commerce Store</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A complete online store to sell your products. Secure,
                  scalable, and packed with features to grow your business.
                </Card.Text>
                <ul>
                  <li className="service-feature">Secure Payment Gateway</li>
                  <li className="service-feature">Product & Order Management</li>
                  <li className="service-feature">Shopping Cart</li>
                </ul>
                <div className="service-price">₹39,999</div>
                <Button variant="primary" href="#" disabled>
                
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;