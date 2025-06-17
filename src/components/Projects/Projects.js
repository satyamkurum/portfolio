import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ai Powered Resume Shortlisting"
              description="Put Resume and Job Descrition and check whether this profile is fit or not for the job role."
              ghLink="https://github.com/satyamkurum/AIpowered_Resume_Shortlisting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Customer_Churn_Prediction"
              description="The Customer Churn Prediction System is a machine learning project aimed at identifying customers who are likely to stop using a service or subscription. The goal is to help businesses proactively address churn and improve customer retention."
              ghLink="https://github.com/satyamkurum/Customer_Churn_Prediction"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Product Demand Forecasting"
              description="The Demand Forecasting Project focuses on predicting future product demand using historical sales data, helping businesses optimize inventory, reduce costs, and improve supply chain efficiency.

In this project, I worked on a retail dataset to forecast demand across different product categories and time periods. I began by performing data cleaning and preprocessing, handling missing values, outliers, and converting time-series data into a usable format."
              ghLink="https://github.com/satyamkurum/Prodcut_Demand_Forecasting"       
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;