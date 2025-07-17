import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <span className="purple">Satyam Kurum</span>, a Curious Mind and a Learner.
            <br />
            <br />
            I'm a B.Tech graduate from the <span className="purple">National Institute of Technology Karnataka (Class of 2025)</span>, currently based in the vibrant tech capital — <span className="purple">Bengaluru, India</span>.
            <br />
            <br />
            My journey into technology began with a fascination for solving problems — and today, it fuels everything I do. From designing intelligent systems and building chatbots, to fine-tuning LLMs with LoRA, I’m passionate about blending AI with meaningful user experiences.
            <br />
            <br />
            I believe in learning by building. Whether it's deploying a RAG chatbot, working with Pinecone & Gemini APIs, or launching GenAI apps on Hugging Face, I'm always excited to turn ideas into something real and useful.
            <br />
            <br />
            Outside the terminal, I stay grounded by curiosity, community, and coffee ☕.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Crafting end-to-end AI & GenAI applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the intersection of data, design & intelligence
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing knowledge, collaborating, and building in public
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "The future isn’t waiting. We’re building it — one prompt at a time."
          </p>
          <footer className="blockquote-footer">Satyam Kurum</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;