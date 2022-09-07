import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thejus T </span>
            from <span className="purple">India.</span>
            <br />A enthusiastic Computer Science Engineer graduated from MACE , Kothamangalam
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
