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
              title="Chatflixy"
              description="Utilized React.js to create an interactive, responsive user interface, allowing, real time communication. Implemented state management using React hooks and context API to handle user sessions. Firebase Realtime Database to manage and sync chat data. Ensured efficient data retrieval and rendering through optimized API calls and component rendering Implemented Firebase Authentication to enable secure user login and used database to store data"
              ghLink="https://github.com/satyamkurum/chatflixy.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BookHub"
              description="Built an intuitive user interface with React.js, enabling users to browse, purchase, and list books for sale. Utilized React Router for smooth navigation and component-based architecture for modular development. Focused on delivering a seamless user experience by optimizing page load times, implementing responsive design.Firebase for secure, real-time data storage and retrieval, handling user authentication, book listings. Implemented Firestore to manage and query a scalable database for efficient data processing.."
              ghLink="https://github.com/satyamkurum/bookhub"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Admin Dashboard"
              description="Designed and implemented a responsive sales dashboard using HTML for structure, CSS for styling, and JavaScript for interactivity. The dashboard adapts to various screen sizes, ensuring a consistent user experience across devices.Integrated a theme color change feature, allowing users to customize the dashboard’s appearance in real-time"
              ghLink="https://github.com/satyamkurum/dashboard"       
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;