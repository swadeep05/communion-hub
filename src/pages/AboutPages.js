import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../styles/AboutPage.css'; // Correct path to the CSS file

const AboutPages = () => {
  return (
    <Container className="about-container">
      <header className="text-center mb-4">
        <h1 className="display-4 font-weight-bold">About CommunionHub</h1>
      </header>
      
      <Row>
        <Col md={6}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title className="card-title">Our Mission</Card.Title>
              <Card.Text>
                CommunionHub is a platform that connects people of different faiths, backgrounds, and cultures through shared experiences and events. We believe in building a global community united by respect, kindness, and love.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title className="card-title">Our Vision</Card.Title>
              <Card.Text>
                Our vision is to create a welcoming space where people can come together to celebrate, learn, and grow. Through events, both online and offline, we aim to foster understanding and encourage collaboration among diverse communities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 text-center">
        <Col>
          <h2>Join Us Today</h2>
          <p>Be part of a community that’s making a difference. Explore events and discover new ways to connect with others.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPages;
