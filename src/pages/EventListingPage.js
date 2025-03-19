import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../styles/EventListingPage.css';  // Link to the updated CSS

const EventListingPage = () => {
  // Sample event data (you can replace this with real data or dynamic content)
  const initialEvents = [
    { id: 1, title: "Community Gathering", date: "2025-04-10", location: "Community Center", description: "A gathering for community discussions and activities." },
    { id: 2, title: "Charity Run", date: "2025-05-15", location: "City Park", description: "A fun charity run to raise money for a good cause." },
    { id: 3, title: "Interfaith Dialogue", date: "2025-06-20", location: "Town Hall", description: "An interfaith dialogue to promote understanding and peace." },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [category, setCategory] = useState("All");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  // Filter events based on category
  const filteredEvents = category === "All" ? events : events.filter(event => event.title.toLowerCase().includes(category.toLowerCase()));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const updatedEvents = [...events, { ...newEvent, id: events.length + 1 }];
    setEvents(updatedEvents);
    setNewEvent({ title: '', date: '', location: '', description: '' }); // Reset form
    setShowAddEventForm(false);  // Hide the form after submitting
  };

  return (
    <div className="event-listing-container">
      <header className="event-listing-header">
        <h1 className="event-listing-title">Events</h1>
        <nav className="event-listing-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/events" className="nav-link">Events</a>
          <a href="/aboutpages" className="nav-link">About</a>
        </nav>
      </header>

      <Container className="event-listing-content">
        <Row>
          <Col md={3}>
            <h5>Filter by Category</h5>
            <Button variant="outline-primary" onClick={() => setCategory("All")}>All</Button>
            <Button variant="outline-primary" onClick={() => setCategory("Community")}>Community</Button>
            <Button variant="outline-primary" onClick={() => setCategory("Charity")}>Charity</Button>
            <Button variant="outline-primary" onClick={() => setCategory("Dialogue")}>Dialogue</Button>

            {/* Add Event Button */}
            <Button
              variant="outline-success"
              onClick={() => setShowAddEventForm(!showAddEventForm)}
              className="mt-4"
            >
              {showAddEventForm ? "Cancel" : "Add Event"}
            </Button>
          </Col>

          <Col md={9}>
            {/* Add Event Form */}
            {showAddEventForm && (
              <Form onSubmit={handleSubmitEvent} className="add-event-form mb-4">
                <Form.Group controlId="eventTitle">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter event title"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="eventDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="eventLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter event location"
                    name="location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="eventDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter event description"
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Add Event
                </Button>
              </Form>
            )}

            {/* Display Events */}
            <Row>
              {filteredEvents.map(event => (
                <Col md={4} key={event.id} className="mb-4">
                  <Card className="event-card">
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>
                        <strong>Date:</strong> {event.date} <br />
                        <strong>Location:</strong> {event.location}
                      </Card.Text>
                      <Card.Text>{event.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventListingPage;
