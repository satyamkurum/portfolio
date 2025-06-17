import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Folks, myself <span className="purple">Satyam Kurum </span>
            a passionate Data Driven Problem Solver <span className="purple"> from Bengaluru, India.</span>
            <br />
            I am Btech Graduated from National Institute of Technology Karnataka'25. <br />
            <br />
            Apart from Coding, I Love..
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Data Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on ML project and Analytics
            </li>
            <li className="about-activity">
              <ImPointRight /> And adapt myself with latest Tech.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Winter is not Coming, AI agents are."{" "}
          </p>
          <footer className="blockquote-footer">Louis Litt </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;