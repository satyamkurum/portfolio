import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import llm from "../../Assets/Projects/llm.jpg";
import reddit from "../../Assets/Projects/reddit.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects where I applied AI, ML, and GenAI to build smart, real-world solutions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="PDF-based RAG Chatbot"
              description="A Retrieval-Augmented Generation (RAG) chatbot that answers user queries from uploaded PDFs using Gemini Pro API and Pinecone for vector search. Built with Streamlit and deployed on Hugging Face Spaces."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llm}
              isBlog={false}
              title="LLM Fine-Tuning with LoRA"
              description="Fine-tuned GPT-2 on custom datasets (motivational quotes, poetry, support chat) using PEFT + LoRA via Hugging Face. Includes tokenizer training, training logs, evaluation, and inference scripts."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reddit}
              isBlog={false}
              title="Reddit User Persona Generator"
              description="Uses LangChain and PRAW to analyze a Reddit user's post/comment history and generate a persona summary using LLMs. Containerized with Docker and deployed using Streamlit on Hugging Face."
              ghLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI-Powered Resume Shortlisting"
              description="An NLP-based pipeline that evaluates candidate resumes against job descriptions using sentence embeddings and cosine similarity. Accelerates screening in HR workflows."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Customer Churn Prediction"
              description="Developed a supervised ML system that predicts customer churn risk from telecom data. Used feature selection, model tuning, and evaluation to improve retention strategies."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Product Demand Forecasting"
              description="Built a time-series forecasting model to predict multi-category product demand. Helped optimize inventory and supply chain decisions using historical sales trends."
              ghLink=""
            />
          </Col>

          

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

